import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 -bottom-1 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0">
      <div className="w-60 md:w-24 h-auto flex items-center justify-center relative">
        <CircularText
          className={"fill-dark animate-spin-slow dark:fill-light"}
        />
        <Link
          href="mailto:efraimfonseca@gmail.com"
          target="_blank"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark rounded-full h-20 w-20 font-semibold hover:bg-light hover:text-dark hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:w-12 md:h-12 md:text-[10px]"
        >
          E-mail
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
