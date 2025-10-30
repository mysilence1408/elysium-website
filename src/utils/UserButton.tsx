"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Loader } from "lucide-react";
import { HiUser } from "react-icons/hi2";
import { Link } from "next-view-transitions";

const UserButton = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [showDropDown, setShowDropDown] = useState(false);

  const handleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  if (status === "loading") {
    return <Loader className="size-6 mr-4 mt-4 float-right animate-spin" />;
  }

  const avatarFallBack = session?.user?.name?.charAt(0).toUpperCase();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  return (
    <div>
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
              <div className="h-10 w-10 flex items-center justify-center bg-gray-300 rounded-full">
                {avatarFallBack}
              </div>
            )}
          </div>

          {showDropDown && (
            <button
              onClick={handleSignOut}
              className="bg-white text-black p-2 absolute top-12 left-0 rounded shadow z-50 cursor-pointer"
            >
              Logout
            </button>
          )}
        </div>
      ) : (
        <Link href="/sign-in">
          <HiUser size={24} />
        </Link>
      )}
    </div>
  );
};

export default UserButton;
