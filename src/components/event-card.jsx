import Link from "next/link";
import React from "react";

export const EventCard = ({ event }) => {
  return (
    <Link href={`/${event.id}`}>
      <main className="relative h-72 rounded-xl bg-slate-50">
        <div className="absolute right-4 top-4 w-fit rounded-lg bg-black p-2 text-sm font-semibold text-white">
          {event.city}
        </div>
        <div className="absolute bottom-0 left-0 p-6">
          <h1 className="text-lg font-semibold">{event.name}</h1>
          <p>{event.author.name}</p>
          <p className="mt-2 text-sm font-semibold tracking-tight text-slate-500">
            {event.participants.length > 0
              ? `${event.participants.length} has
            joined`
              : "No one has joined yet"}
          </p>
        </div>
      </main>
    </Link>
  );
};
