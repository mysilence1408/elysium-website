import AboutBottom from "@/components/About/AboutBottom";
import AboutTop from "@/components/About/AboutTop";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description:
    "About us, our mission, our values, and our team. Learn more about our company and our commitment to providing the best possible service to our customers",
};
const About = () => {
  return (
    <div>
      <AboutTop />
      <AboutBottom />
    </div>
  );
};

export default About;
