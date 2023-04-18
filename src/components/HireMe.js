import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 -bottom-1 flex items-center justify-center overflow-hidden">
      <div className="w-60 h-auto flex items-center justify-center relative">
        <CircularText className={"fill-dark animate-spin-slow"} />
        <Link
          href="mailto:efraimfonseca@gmail.com"
          target="_blank"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark rounded-full h-20 w-20 font-semibold hover:bg-light hover:text-dark"
        >
          E-mail
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
