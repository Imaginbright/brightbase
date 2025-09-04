import React from "react";
import NavLinks from "./navbar/NavLinks";
import ROUTES from "@/constants/routes";

import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const LeftSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border border-r sticky left-0 top-0 flex flex-col justify-between overflow-y-auto p-6 pt-36 0 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-col flex-1 gap-6">
        <NavLinks />
      </div>

      <div className="flex flex-col gap-3">
        <Button className="small-medium btn-secondary w-full min-h-[41px] px-4 py-3 rounded-lg shadow-none">
          <Image
            src="/icons/account.svg"
            alt="Account"
            width={20}
            height={20}
            className="invert=colors lg:hidden"
          />
          <Link href={ROUTES.SIGN_IN}>
            <span className="primary-text-gradient max-lg:hidden">Sign In</span>
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
      </div>
    </section>
  );
};

export default LeftSidebar;
