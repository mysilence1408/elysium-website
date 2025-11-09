import React from "react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer aria-labelledby="footer-heading" className="bg-black py-16">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto px-6">
        {/* Bottom footer */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-neutral-800 pt-8 md:flex-row">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Elysium. All rights reserved
          </p>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Elysium"
              width={150}
              height={25}
            />
          </Link>
          <div className=" flex items-center gap-2 cursor-pointer text-gray-400">
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
            <FaXTwitter />
          </div>
        </div>
      </div>
    </footer>
  );
};
