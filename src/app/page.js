import { EventCard } from "@/components/event-card";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { prisma } from "@/utils/prisma";

export default async function Home() {
  const events = await prisma.event.findMany({
    include: {
      author: true,
      participants: {
        select: {
          id: true,
        },
      },
    },
  });

  return (
    <div className="m-auto flex min-h-screen max-w-6xl flex-col items-center justify-between py-8">
      <section className="space-y-24">
        <Header />
        <main className="space-y-24">
          <section className="space-y-6 text-balance text-center">
            <h1 className="text-8xl font-semibold tracking-tighter">
              Build an event, and invite your folks!
            </h1>
            <h3 className="text-lg">
              Sports ? Webinar ? Speech ? Or even Gabutz ? No Problem!
            </h3>
            <div className="flex justify-center">
              <button className="rounded-full bg-black px-6 py-2.5 text-lg font-semibold text-white">
                Start your first event!
              </button>
            </div>
          </section>
          <section className="grid grid-cols-3 gap-4">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </section>
        </main>
      </section>
      <Footer />
    </div>
  );
}
