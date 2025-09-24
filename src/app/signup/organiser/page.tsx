"use client";

import * as React from "react";
import { Button } from "@/components/ui/button-custom";
import Link from "next/link";

export default function SignupOrganiser() {
  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
    orgName: "",
    email: "",
    password: "",
  });

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <main className="container lg:mt-[-150px] max-w-3xl px-4 py-24">
      <h1 className="text-3xl text-secondary font-bold">
        Sign up as an organiser
      </h1>
      <p className="mt-3 text-secondary">
        Enter your organisation&apos;s details and choose a password. Already
        have an account?
        <Link href="/login" className="underline font-bold">
          Log in here.
        </Link>
      </p>

      <form onSubmit={onSubmit} className="mt-8 grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            name="firstName"
            value={state.firstName}
            onChange={onChange}
            placeholder="First Name"
            className="rounded-md border border-gray-200 px-4 py-3"
          />
          <input
            name="lastName"
            value={state.lastName}
            onChange={onChange}
            placeholder="Last Name"
            className="rounded-md border border-gray-200 px-4 py-3"
          />
        </div>
        <input
          name="orgName"
          value={state.orgName}
          onChange={onChange}
          placeholder="Organisation name"
          className="rounded-md border border-gray-200 px-4 py-3"
        />
        <input
          name="email"
          value={state.email}
          onChange={onChange}
          placeholder="Email"
          className="rounded-md border border-gray-200 px-4 py-3"
        />
        <div>
          <input
            name="password"
            value={state.password}
            onChange={onChange}
            placeholder="Enter a password"
            type="password"
            className="w-full rounded-md border border-gray-200 px-4 py-3"
          />
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms" className="text-sm">
            I agree to Rockbell&apos;s{" "}
            <a className="underline">Terms and Conditions</a> and{" "}
            <a className="underline">Privacy Policy</a>.
          </label>
        </div>

        <div className="flex justify-end">
          <Button type="submit" className="bg-primary text-primary-foreground">
            Next
          </Button>
        </div>
      </form>
    </main>
  );
}
