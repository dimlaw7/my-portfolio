"use client";
import Image from "next/image";

const LetsTalkBtn = ({ width, fontSize, title, icon }) => {
  return (
    <button
      className={
        "relative z-[2] mx-auto flex items-center justify-center rounded border-b-4 border-[#9BCF53] bg-[rgb(52,58,91,0.6)] py-2 uppercase before:absolute before:bottom-0 before:left-0 before:z-[-1] before:h-0 before:w-full before:bg-[#9BCF53] before:transition-all hover:before:h-full lg:mx-0 " +
        width +
        " " +
        fontSize
      }
    >
      {title ? title : "Let's Talk!"}

      {icon ? (
        <Image
          src="/arrow_up.svg"
          className="rotate-180"
          alt="Svg Icon"
          width={40}
          height={40}
        />
      ) : (
        ""
      )}
    </button>
  );
};

export default LetsTalkBtn;
