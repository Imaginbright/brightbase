import { auth } from "@/auth";
import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import { api } from "@/lib/api";
import handleError from "@/lib/handlers/error";

import Link from "next/link";
import React from "react";

const questions = [
  {
    _id: "1",
    title: "What Nigerian debit card works on App Store",
    description:
      "I have been trying to use my GTBank debit card on the App Store but it keeps getting declined. Does anyone know of a Nigerian debit card that works on the App Store?",
    tags: [
      { _id: "1", name: "Apple" },
      { _id: "2", name: "App Store" },
      { _id: "3", name: "Debit Card" },
      { id: "4", name: "Nigeria" },
    ],
    author: {
      _id: "1",
      name: "Okonkwo Somto",
      image:
        "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png",
    },
    upvotes: 5,
    answers: 2,
    views: 150,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "How to mirror my PC screen to my iPad",
    description:
      "I want to mirror my PC screen to my iPad so i can sculpt on Blender using it. What are the best apps or methods to achieve this?",
    tags: [
      { id: "1", name: "iPad" },
      { id: "2", name: "PC" },
      { id: "3", name: "Screen Mirroring" },
      { id: "4", name: "Blender" },
    ],
    author: {
      _id: "1",
      name: "Stephanie Mmesoma",
      image:
        "https://www.shutterstock.com/image-vector/vector-bright-portrait-beautiful-brunette-600nw-2452267975.jpg",
    },
    upvotes: 5,
    answers: 2,
    views: 150,
    createdAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const session = await auth();

  if (session) {
    console.log("✅ Session:", session);
  } else {
    console.log("⚠️ No session found (probably not logged in)");
  }

  const { query = "", filter = "" } = await searchParams;

  // worked on sth here in  the end of chap 50

  const filteredQuestions = questions.filter((questions) =>
    questions.title.toLowerCase().includes(query?.toLowerCase())
  );

  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center ">
        <h1 className="h1-bold text-dark100_light900 ">All Questions</h1>

        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((questions) => (
          <QuestionCard key={questions._id} questions={questions} />
        ))}
      </div>
    </>
  );
};

export default Home;
