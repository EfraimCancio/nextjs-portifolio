import React from "react";

import Link from "next/link";

import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium dark:border-light dark:text-light text-lg  sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span className="sm:text-center">
          {new Date().getFullYear()} Dizitalize&copy; Todos os direitos
          reservados
        </span>
        <div className="flex items-center  lg:items-center lg:flex-col lg:py-6">
          Desenvolvido com
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>{" "}
          pelo
          <Link
            href="https://github.com/EfraimCancio"
            target="_blank"
            className="underline underline-offset-2"
          >
            Efraim Fonseca
          </Link>
        </div>
        <Link
          href="https://github.com/EfraimCancio"
          target="_blank"
          className="underline underline-offset-2"
        >
          Diga olá
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
