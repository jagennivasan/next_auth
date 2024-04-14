"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function () {
  const { data: session } = useSession();
  return (
    <div className="grid place-items-center h-screen ">
      <div className="shadow-md p-8 flex flex-col gap-2 my-6">
        <div>
          Name:<span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          Email:<span className="font-bold">{session?.user?.email}</span>
        </div>
        <button
          onClick={() => {
            signOut();
          }}
          className="bg-red-500 hover:bg-red-700 rounded-md text-white px-2 py-1 mt-3 font-bold"
        >
          Log out
        </button>
      </div>
    </div>
  );
}
