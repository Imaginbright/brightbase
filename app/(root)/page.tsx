import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import React from "react";

const Home = async () => {
  const session = await auth();

  console.log(session);
  return (
    <>
      <h1 className="font-space-grotesk">Welcome to next.js</h1>

      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";

          await signOut({ redirectTo: ROUTES.SIGN_UP });
        }}
      >
        <Button type="submit">Log Out</Button>
      </form>
    </>
  );
};

export default Home;
