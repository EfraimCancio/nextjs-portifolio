import React, { useEffect, useRef } from "react";

import { useInView, useMotionValue, useSpring } from "framer-motion";

import Head from "next/head";
import Image from "next/image";

import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";

import profilePic from "../../public/images/profile/developer-pic-2.jpeg";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Digitalize | About Page</title>
        <meta name="description" content="Digitalize" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="A paixão alimenta o propósito!" className="" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg uppercase font-bold text-dark/75">
                Biografia
              </h2>
              <p className="font-medium">
                - Olá, sou CodeBucks, um desenvolvedor web e designer de UI/UX
                com paixão por criar designs bonitos, funcionais, e experiências
                digitais centradas no usuário. Com 4 anos de experiência na
                área. estou sempre procurando maneiras novas e inovadoras de dar
                vida às visões de meus clientes.
              </p>
              <p className="my-4 font-medium">
                - Eu acredito que o design é mais do que apenas fazer as coisas
                parecerem bonitas - é sobre resolver problemas e criando
                experiências intuitivas e agradáveis para os usuários.
              </p>
              <p className="font-medium">
                - Se estou trabalhando em um site, aplicativo móvel ou outro
                produto digital, trago meu compromisso com a excelência em
                design e o pensamento centrado no usuário para cada projeto em
                que trabalho. Estou ansioso pela oportunidade de trazer minhas
                habilidades e paixão para o seu próximo projeto.
              </p>
            </div>
            <div className="col-span-3 relative h-max border-2 border-solid border-dark rounded-2xl bg-light p-8 mt-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profilePic}
                alt="Digitalize"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Clientes atendidos
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Projetos concluidos
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Anos de experiência
                </h2>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
