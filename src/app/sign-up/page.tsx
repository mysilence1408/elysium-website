"use client";
import { Link } from "next-view-transitions";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [pending, setPending] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setPending(false);
        toast.success(data.message || "Account created successfully!", {
          duration: 3000,
          style: {
            borderRadius: "10px",
            background: "#6a0dad",
            color: "white",
          },
        });
        router.push("/sign-in");
      } else {
        toast.error(data.message || "Something went wrong!", {
          duration: 3000,
          style: {
            borderRadius: "10px",
            background: "#ef4444",
            color: "white",
          },
        });
        setPending(false);
      }
    } catch (err) {
      setPending(false);
      toast.error("Network error. Please try again later.", {
        duration: 3000,
        style: {
          borderRadius: "10px",
          background: "#ef4444",
          color: "white",
        },
      });
    }
  };

  return (
    <div className="flex items-center justify-center bg-red-400 py-16 px-4 lg:px-8 ">
      <div className=" bg-white text-black space-y-8 p-10 lg:p-20 rounded-md">
        <div className=" text-center space-y-4">
          <h1 className=" text-4xl font-bold"> Sign up</h1>
          <p>Use email or service to create account</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            required
            disabled={pending}
            value={form.name}
            placeholder="Full name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className=" border-2 border-gray-200 px-1 py-2 rounded-md"
          />
          <input
            type="email"
            required
            disabled={pending}
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className=" border-2 border-gray-200 px-1 py-2 rounded-md"
          />
          <input
            type="password"
            required
            disabled={pending}
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className=" border-2 border-gray-200 px-1 py-2 rounded-md"
          />
          <input
            type="password"
            required
            disabled={pending}
            placeholder="Confirm password"
            value={form.confirmPassword}
            onChange={(e) =>
              setForm({ ...form, confirmPassword: e.target.value })
            }
            className=" border-2 border-gray-200 px-1 py-2 rounded-md"
          />
          <button
            disabled={pending}
            className=" w-full bg-neutral-800 rounded-md text-white py-2 cursor-pointer hover:bg-black transition-colors duration-300 ease-in-out"
          >
            Continue
          </button>
        </form>
        <div className=" flex my-2 justify-evenly mx-auto items-center">
          <button
            onClick={() => {}}
            className=" bg-slate-300  hover:bg-slate-400 p-2 rounded-md cursor-pointer"
          >
            <FcGoogle className=" size-8 left-2.5 top-2.5" />
          </button>
          <button
            onClick={() => {}}
            className=" bg-slate-300  hover:bg-slate-400 p-2 rounded-md cursor-pointer"
          >
            <FaGithub className=" size-8 left-2.5 top-2.5" />
          </button>
        </div>
        <div className=" flex items-end justify-center">
          <p className=" text-center text-sm mt-2">Already have an account?</p>
          <Link
            className=" text-sky-700 ml-4 hover:underline cursor-pointer text-sm"
            href="/sign-in"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
