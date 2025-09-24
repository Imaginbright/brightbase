import React from "react";
import NavLinks from "./navbar/NavLinks";
import ROUTES from "@/constants/routes";

import { auth, signOut } from "@/auth";
import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const LeftSidebar = async () => {
  const session = await auth();
  const userId = session?.user?.id;

  return (
    <section className="custom-scrollbar background-light900_dark200 light-border border-r sticky left-0 top-0 flex flex-col justify-between overflow-y-auto p-6 pt-36 0 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-col flex-1 gap-6">
        <NavLinks userId={userId} />
      </div>

      <div className="flex flex-col gap-3">
        {userId ? (
          <form
            action={async () => {
              "use server";

              await signOut();
            }}
          >
            <Button
              type="submit"
              className="base-medium w-fit !bg-transparent px-4 py-3"
            >
              <LogOut className="size-5 text-black dark:text-white" />
              <span className="max-lg:hidden text-dark300_light900">
                Logout
              </span>
            </Button>
          </form>
        ) : (
          <>
            <Button className="small-medium btn-secondary w-full min-h-[41px] px-4 py-3 rounded-lg shadow-none">
              <Image
                src="/icons/account.svg"
                alt="Account"
                width={20}
                height={20}
                className="invert=colors lg:hidden"
              />
              <Link href={ROUTES.SIGN_IN}>
                <span className="primary-text-gradient max-lg:hidden">
                  Sign In
                </span>
              </Link>
            </Button>

            <Button className="small-medium light-border-2 btn-tertiary w-full text-dark400_light900 min-h-[41px] px-4 py-3 rounded-lg shadow-none border">
              <Image
                src="/icons/sign-up.svg"
                alt="Account"
                width={20}
                height={20}
                className="invert=colors lg:hidden"
              />
              <Link href={ROUTES.SIGN_UP}>
                <span className="max-lg:hidden">Sign up</span>
              </Link>
            </Button>
          </>
        )}
      </div>
    </section>
  );
};

export default LeftSidebar;
