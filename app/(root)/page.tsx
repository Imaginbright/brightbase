import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import React from "react";

const Home = async () => {
  const session = await auth();

  if (session) {
    console.log("✅ Session:", session);
  } else {
    console.log("⚠️ No session found (probably not logged in)");
  }
  return (
    <>
      <form
        className="px-10"
        action={async () => {
          "use server";

          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">Log out</Button>
      </form>
      <h1 className="font-space-grotesk">Welcome to next.js</h1>
    </>
  );
};

export default Home;
