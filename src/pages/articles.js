import React, { useRef } from "react";

import { easeInOut, motion, useMotionValue } from "framer-motion";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";

import article1 from "../../public/images/articles/create loading screen in react js.jpg";
import article2 from "../../public/images/articles/create modal component in react using react portals.png";
import article3 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import article4 from "../../public/images/articles/pagination component in reactjs.jpg";
import article5 from "../../public/images/articles/smooth scrolling in reactjs.png";
import article6 from "../../public/images/articles/todo list app built using react redux and framer motion.png";
import article7 from "../../public/images/articles/What is higher order component in React.jpg";
import article8 from "../../public/images/articles/What is Redux with easy explanation.png";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize dark:text-light cursor-pointer text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      className="relative w-full p-4 py-6 my-4 flex items-center justify-between bg-light text-dark dark:text-light dark:bg-dark border border-solid border-dark dark:border-light rounded-xl border-r-8 border-b-8 first:mt-0"
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: easeInOut } }}
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-2xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer hover:underline"
      >
        <h2 className="capitalize text-2xl font-bold dark:text-light my-2">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2 dark:text-light ">{summary}</p>
      <span className="text-primary dark:text-primaryDark font-semibold">
        {time}
      </span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Digitalize | articles Page</title>
        <meta name="description" content="Digitalize" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="As palavras podem mudar o mundo!"
            className="mb-16"
          />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="/"
              img={article1}
            />
            <FeaturedArticle
              title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
              summary="Learn how to create stunning loading screens in React with 3 different methods. 
              Discover how to use React-Loading, React-Lottie & build a custom loading screen. 
              Improve the user experience."
              time="10 min read"
              link="/"
              img={article2}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center dark:text-light my-16 mt-32">
            Todos os artigos
          </h2>
          <ul>
            <Article
              date="2020"
              link="/"
              img={article3}
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            />
            <Article
              date="2020"
              link="/"
              img={article4}
              title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
            />
            <Article
              date="2020"
              link="/"
              img={article5}
              title="Creating An Efficient Modal Component In React Using Hooks And Portals"
            />
            <Article
              date="2020"
              link="/"
              img={article6}
              title="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
            />
            <Article
              date="2020"
              link="/"
              img={article7}
              title="Redux Simplified: A Beginner's Guide For Web Developers"
            />
            <Article
              date="2020"
              link="/"
              img={article8}
              title="What Is Higher Order Component (Hoc) In React?"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
