"use client";
import { Link } from "next-view-transitions";
import React from "react";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [pending, setPending] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (res?.ok) {
      router.push("/");
      toast.success("Logged in successfully", {
        duration: 3000,
        style: {
          borderRadius: "10px",
          background: "#6a0dad",
          color: "white",
        },
      });
    } else if (res?.status === 401) {
      setPending(false);
      toast.error("Invalid credentials", {
        duration: 3000,
        style: {
          borderRadius: "10px",
          background: "#6a0dad",
          color: "white",
        },
      });
    } else {
      toast.error("Something went wrong", {
        duration: 3000,
        style: {
          borderRadius: "10px",
          background: "#6a0dad",
          color: "white",
        },
      });
    }
  };

  return (
    <div className="flex items-center justify-center py-16 px-4 lg:px-8 bg-[url('/images/signin_bg.jpg')] ">
      <motion.div
        initial={{ borderColor: "hsl(340, 82%, 47%)" }}
        animate={{
          borderColor: ["hsl(340, 82%, 47%)", "hsl(240, 100%, 50%)"],
          transition: {
            duration: 4,
            ease: "linear",
            repeat: Infinity,
            repeatType: "mirror",
          },
        }}
        className="border border-solid backdrop-blur-sm text-white space-y-8 p-10 lg:p-20 rounded-md"
      >
        <div className=" text-center space-y-4">
          <h1 className=" text-4xl font-bold"> Sign in</h1>
          <p>Use email to sign in</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            disabled={pending}
            value={email}
            required
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className=" border-1 border-[#48474a] px-1 py-2 rounded-md"
          />
          <input
            type="password"
            disabled={pending}
            value={password}
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className=" border-1 border-[#48474a] px-1 py-2 rounded-md"
          />
          <motion.button
            initial={{ backgroundColor: "hsl(340, 82%, 47%)" }}
            animate={{
              backgroundColor: ["hsl(340, 82%, 47%)", "hsl(240, 100%, 50%)"],
              transition: {
                duration: 4,
                ease: "linear",
                repeat: Infinity,
                repeatType: "mirror",
              },
            }}
            disabled={pending}
            className=" w-full rounded-md text-white py-2 cursor-pointer hover:bg-black transition-colors duration-300 ease-in-out"
          >
            Continue
          </motion.button>
        </form>

        <div className=" flex items-end justify-center">
          <p className=" text-center text-sm mt-2">Create new account</p>
          <Link
            className=" text-[#EA2264] ml-4 hover:underline cursor-pointer text-sm"
            href="/sign-up"
          >
            Sign up
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default SignIn;
