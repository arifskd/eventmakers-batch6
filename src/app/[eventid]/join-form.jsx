"use client";

import { useActionState } from "react";
import { joinEventAction } from "./action";

export const JoinForm = ({ eventId }) => {
  const [state, formAction, pending] = useActionState(joinEventAction, null);

  return (
    <form action={formAction} className="w-[300px] space-y-2">
      <input name="eventId" value={eventId} type="hidden" />
      <input name="name" placeholder="Name" />
      <input name="email" placeholder="Email" />
      <button disabled={pending}>Join Event</button>
      {!state?.success && <p>{state?.message}</p>}
      {state?.success && <p>{state?.message}</p>}
    </form>
  );
};
