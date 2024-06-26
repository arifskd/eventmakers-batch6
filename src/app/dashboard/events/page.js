import { EventCard } from "@/components/event-card";
import { auth } from "@/lib/auth";
import { prisma } from "@/utils/prisma";
import React from "react";

export default async function Page() {
  const user = await auth();

  const events = await prisma.event.findMany({
    where: {
      authorId: user.id,
    },
    include: {
      author: true,
      participants: {
        select: {
          id: true,
        },
      },
    },
  });

  console.log(events);

  return (
    <main className="space-y-12">
      <section className="flex items-center justify-between">
        <h3>My Events</h3>
        <button>Create event</button>
      </section>
      <section className="grid grid-cols-2 gap-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>{" "}
    </main>
  );
}
