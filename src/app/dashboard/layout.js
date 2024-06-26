import Link from "next/link";
import React from "react";

export default function Layout({ children }) {
  return (
    <main className="m-auto my-12 flex max-w-6xl">
      <aside className="w-[230px] space-y-4">
        <Link href="/">
          <div className="text-lg font-bold tracking-tight">Eventmakers.</div>
        </Link>
        <section className="space-y-2 font-medium">
          <div>Events</div>
          <div>Profile</div>
        </section>
        <div>Logout</div>
      </aside>
      <main className="w-[calc(100%-230px)]">{children}</main>
    </main>
  );
}
