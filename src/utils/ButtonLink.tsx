import React from "react";
import Link from "next/link";

type ButtonLinkProps = {
  text: string;
  link: string;
};

const ButtonLink = ({ text, link }: ButtonLinkProps) => {
  return (
    <div className=" translate-y-5 mt-8 inline-flex items-center justify-center px-12 py-4 text-center font-extrabold tracking-wider uppercase transition-colors duration-300 border border-white text-white hover:bg-white/20 cursor-pointer w-fit">
      <Link href={link}>{text}</Link>
    </div>
  );
};

export default ButtonLink;
