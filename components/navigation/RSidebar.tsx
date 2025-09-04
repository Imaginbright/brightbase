import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TagCard from "../cards/TagCard";

const hotQuestions = [
  { _id: "1", title: "What cards works on the Nigerian App Store?" },
  { _id: "2", title: "How do i order stuff from US to Nigeria?" },
  { _id: "3", title: "What is the best GPU for someone with $600 budget" },
  { _id: "4", title: "How do i mirror my Pc screen to iPad" },
  { _id: "5", title: "Can i play Gta 5 on my phone?" },
];

const popularTags = [
  { _id: "1", name: "App Store", questions: 10 },
  { _id: "2", name: "Streaming", questions: 15 },
  { _id: "3", name: "Budget Build", questions: 30 },
  { _id: "4", name: "US Shiping", questions: 18 },
  { _id: "5", name: "iPad", questions: 12 },
];

const RSidebar = () => {
  return (
    <section className="custom-scrollbar pt-36 background-light900_dark200 light-border border-l sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto p-6 shadow-light-300 dark:shadow-none max-xl:hidden">
      <h3 className="h3-bold text-dark200_light900">Top Questions</h3>

      <div className="mt-7 flex flex-col w-full gap-[30px]">
        {hotQuestions.map(({ _id, title }) => (
          <Link
            key={_id}
            href={ROUTES.PROFILE(_id)}
            className="flex cursor-pointer items-center justify-between gap-7"
          >
            <p className="body-medium text-dark500_light700">{title}</p>

            <Image
              src="/icons/chevron-right.svg"
              alt="Arrow-right"
              width={20}
              height={20}
              className="invert-colors"
            />
          </Link>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>

        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard
              key={_id}
              _id={_id}
              name={name}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RSidebar;
