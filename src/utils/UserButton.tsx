"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import { Loader } from "lucide-react";
import { HiUser } from "react-icons/hi2";
import { Link } from "next-view-transitions";

const UserButton = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [showDropDown, setShowDropDown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropDown = () => {
    setShowDropDown((prev) => !prev);
  };

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (status === "loading") {
    return <Loader className="size-6 mr-4 mt-4 float-right animate-spin" />;
  }

  const avatarFallBack = session?.user?.name?.charAt(0).toUpperCase();

  return (
    <div ref={dropdownRef}>
      {session ? (
        <div className="relative">
          <div
            className="flex gap-2 items-center cursor-pointer"
            onClick={handleDropDown}
          >
            <div>{session.user?.name}</div>
            {session.user?.image ? (
              <img
                src={session.user.image}
                className="h-10 w-10 rounded-full"
              />
            ) : (
              <div className="h-10 w-10 flex items-center justify-center bg-purple-700 rounded-full">
                {avatarFallBack}
              </div>
            )}
          </div>

          {showDropDown && (
            <button
              onClick={handleSignOut}
              className="bg-[#c7d7e6] text-black px-2 py-1 absolute top-12 left-0 rounded shadow z-50 cursor-pointer hover:opacity-80 transition-all duration-300 ease-in-out"
            >
              Logout
            </button>
          )}
        </div>
      ) : (
        <Link href="/sign-in">
          <HiUser size={24} color="#c7d7e6" />
        </Link>
      )}
    </div>
  );
};

export default UserButton;
