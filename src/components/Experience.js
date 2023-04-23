import React, { useRef } from "react";

import { motion, useScroll } from "framer-motion";

import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize cursor-pointer"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const scrollYProgress = useScroll({
    target: ref,
    offset: ["star end", "center start"],
  });

  return (
    <div className="my-24">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-5xl md:mb-16">
        Experiencia
      </h2>
      <div ref={ref} className="w-[75%] lg:w-[90%] md:w-full mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Estudante Frontend"
            company="RocketSeat"
            companyLink="https://app.rocketseat.com.br/dashboard"
            time="2019-Atualmente"
            address="online"
            work="A partir de 2019 eu participei de todos os eventos promovidos pela plataforma (NLW, DoWile e Ignite). Tive o Diego e o Mikão como mentores na minha caminhada de aprendizado no mundo da programação Web."
          />
          <Details
            position="Estudante Frontend"
            company="RocketSeat"
            companyLink="https://app.rocketseat.com.br/dashboard"
            time="2019-Atualmente"
            address="online"
            work="A partir de 2019 eu participei de todos os eventos promovidos pela plataforma (NLW, DoWile e Ignite). Tive o Diego e o Mikão como mentores na minha caminhada de aprendizado no mundo da programação Web."
          />
          <Details
            position="Estudante Frontend"
            company="RocketSeat"
            companyLink="https://app.rocketseat.com.br/dashboard"
            time="2019-Atualmente"
            address="online"
            work="A partir de 2019 eu participei de todos os eventos promovidos pela plataforma (NLW, DoWile e Ignite). Tive o Diego e o Mikão como mentores na minha caminhada de aprendizado no mundo da programação Web."
          />
          <Details
            position="Estudante Frontend"
            company="RocketSeat"
            companyLink="https://app.rocketseat.com.br/dashboard"
            time="2019-Atualmente"
            address="online"
            work="A partir de 2019 eu participei de todos os eventos promovidos pela plataforma (NLW, DoWile e Ignite). Tive o Diego e o Mikão como mentores na minha caminhada de aprendizado no mundo da programação Web."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
