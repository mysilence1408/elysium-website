import SignIn from "@/components/SignIn/SignIn";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sign In",
  description:
    "Securely access your Elysium account to manage your profile, explore exclusive fragrances, and continue your tailored experience with ease.",
};

const SignInPage = () => {
  return (
    <div>
      <SignIn />
    </div>
  );
};

export default SignInPage;
