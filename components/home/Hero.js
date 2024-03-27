"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
import LetsTalkBtn from "./utils/LetsTalkBtn";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="hero container relative mx-auto flex min-h-[inherit] w-full flex-col px-4 pb-8 lg:flex-wrap lg:justify-between lg:px-0">
      <Header />
      <div
        data-aos="zoom-in"
        className="hero-text mt-8 flex flex-col items-center self-center lg:mt-auto lg:block"
      >
        <h1 className="text-center text-2xl font-black uppercase leading-10 lg:text-left lg:text-5xl lg:leading-normal">
          Need a creative and stable <br />
          web solution{" "}
          <span className="text-[#9BCF53]">
            for your <br />
            business??
          </span>
        </h1>
        <p className="mb-8 mt-8 text-center font-light leading-8 lg:w-2/4 lg:text-left lg:text-lg">
          Welcome to my web developer portfolio. I'm thrilled to showcase my
          passion for crafting captivating and functional websites.
        </p>
        <LetsTalkBtn
          width="w-40"
          fontSize="animate-bounce hover:animate-none text-base"
        />
      </div>
      <div
        data-aos="zoom-in"
        className="avatar static bottom-0 right-0 hidden lg:absolute lg:block"
      >
        <img
          src="avatar.png"
          className="mx-auto w-2/4 lg:w-full"
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Hero;
