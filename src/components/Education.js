import React, { useRef } from "react";

import { motion, useScroll } from "framer-motion";

import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const scrollYProgress = useScroll({
    target: ref,
    offset: ["star end", "center start"],
  });

  return (
    <div className="my-40">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Formação</h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Estudante Frontend"
            time="2019-Atualmente"
            place="RocketSeat"
            info="A partir de 2019 eu participei de todos os eventos promovidos pela plataforma (NLW, DoWile e Ignite). Tive o Diego e o Mikão como mentores na minha caminhada de aprendizado no mundo da programação Web."
          />
          <Details
            type="Estudante Frontend"
            time="2019-Atualmente"
            place="RocketSeat"
            info="A partir de 2019 eu participei de todos os eventos promovidos pela plataforma (NLW, DoWile e Ignite). Tive o Diego e o Mikão como mentores na minha caminhada de aprendizado no mundo da programação Web."
          />
          <Details
            type="Estudante Frontend"
            time="2019-Atualmente"
            place="RocketSeat"
            info="A partir de 2019 eu participei de todos os eventos promovidos pela plataforma (NLW, DoWile e Ignite). Tive o Diego e o Mikão como mentores na minha caminhada de aprendizado no mundo da programação Web."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
