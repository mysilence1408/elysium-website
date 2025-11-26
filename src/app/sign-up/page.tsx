import SignUp from "@/components/SignUp/SignUp";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sign Up",
  description:
    "Create your Elysium account to unlock personalized recommendations, exclusive offers, and a refined journey through our signature fragrance collection.",
};
const SignUpPage = () => {
  return (
    <div>
      <SignUp />
    </div>
  );
};

export default SignUpPage;
