import { auth } from "@/lib/auth";
import Link from "next/link";
import React from "react";

export const Header = async () => {
  const user = await auth();

  return (
    <header className="flex items-center justify-between rounded-full bg-yellow-300 p-3 shadow-sm">
      <Link href="/">
        <div className="ml-3 text-lg font-bold">Eventmakers.</div>
      </Link>
      <div className="flex items-center gap-4 font-semibold">
        <div>Event</div>
        <div>Popular</div>
        {user ? (
          <Link href="/dashboard/events">
            <button className="rounded-full bg-black px-4 py-2 text-white">
              Dashboard
            </button>
          </Link>
        ) : (
          <>
            <div>Login</div>
            <button className="rounded-full bg-black px-4 py-2 text-white">
              Get started
            </button>
          </>
        )}
      </div>
    </header>
  );
};
