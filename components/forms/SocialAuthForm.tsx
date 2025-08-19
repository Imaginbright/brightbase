import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const SocialAuthForm = () => {
  const buttonClass =
    "background-dark400_light900 body-medium min-h-12 flex-1 px-4 py-3.5 text-dark200_light800 rounded-2";

  return (
    <div className="flex flex-wrap mt-10 gap-2.5">
      <Button className={buttonClass}>
        <Image
          src="/icons/github.svg"
          alt="Github logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Login with Github</span>
      </Button>

      <Button className={buttonClass}>
        <Image
          src="/icons/google.svg"
          alt="Google logo"
          width={20}
          height={20}
          className="mr-2.5 object-contain"
        />
        <span>Login with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
