"use client";

import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/button-custom";

export default function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // no-op
  }

  return (
    <main className="container lg:mt-[-150px] max-w-3xl px-4 py-24">
      <div className="mx-auto">
        <h1 className="text-3xl text-secondary font-bold">Log in</h1>
        <p className="mt-3 text-secondary">
          Enter your email address and password. Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-bold underline">
            Sign up
          </Link>{" "}
          here.
        </p>

        <form onSubmit={onSubmit} className="mt-8 space-y-6">
          <div>
            <label className="mb-2 block text-sm font-semibold">
              Email address *
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter an email"
              type="email"
              className="w-full rounded-md border border-gray-200 px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Password *
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter a password"
              type="password"
              className="w-full rounded-md border border-gray-200 px-4 py-3"
            />
          </div>

          <p className="text-sm">
            Forgotten your password?{" "}
            <a className="underline font-bold">Reset it here.</a>
          </p>

          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-primary text-primary-foreground"
            >
              Log in
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
