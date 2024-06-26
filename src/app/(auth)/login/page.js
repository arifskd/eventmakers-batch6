"use client";

import Link from "next/link";
import React, { useActionState } from "react";
import { loginAction } from "./action";

export default function Page() {
  const [state, formAction, pending] = useActionState(loginAction, null);

  return (
    <main className="space-y-6">
      <section>
        <h3>Login</h3>
        <p>Welcome back, please login</p>
      </section>
      <form action={formAction} className="space-y-2">
        <input name="email" placeholder="Email" type="email" />
        <input name="password" placeholder="password" type="password" />
        <button disabled={pending} className="w-full">
          Login
        </button>
        {!state?.success && <p>{state?.message}</p>}
        {state?.success && <p>{state?.message}</p>}
      </form>
      <p>
        Don&apos;t have an account ? <Link href="/register">Register</Link>
      </p>
    </main>
  );
}
