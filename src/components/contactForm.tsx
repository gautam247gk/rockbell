"use client";

import * as React from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button-custom";

export default function ContactForm() {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setValues((s) => ({ ...s, [name]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // No-op: form intentionally doesn't submit anywhere.
    // We can optionally clear the form to simulate success.
    setValues({ name: "", email: "", phone: "", company: "", message: "" });
  }

  return (
    <DialogContent className="flex flex-col mx-auto my-auto items-center max-w-4xl">
      <DialogHeader className="flex flex-col p-4 items-center text-center">
        <DialogTitle className="text-3xl px-2 font-extrabold">
          Contact Us
        </DialogTitle>
        <DialogDescription>
          We&apos;d love to hear from you! Please send us your feedback or
          questions.
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={onSubmit} className="mt-6 grid w-full gap-4">
        <input
          name="name"
          value={values.name}
          onChange={onChange}
          placeholder="Your name"
          className="w-full rounded-md border border-gray-200 px-4 py-3 placeholder:text-muted-foreground"
        />

        <input
          name="email"
          value={values.email}
          onChange={onChange}
          placeholder="Your email"
          type="email"
          className="w-full rounded-md border border-gray-200 px-4 py-3 placeholder:text-muted-foreground"
        />

        <input
          name="phone"
          value={values.phone}
          onChange={onChange}
          placeholder="Your phone number (optional)"
          className="w-full rounded-md border border-gray-200 px-4 py-3 placeholder:text-muted-foreground"
        />

        <input
          name="company"
          value={values.company}
          onChange={onChange}
          placeholder="Your company name (optional)"
          className="w-full rounded-md border border-gray-200 px-4 py-3 placeholder:text-muted-foreground"
        />

        <textarea
          name="message"
          value={values.message}
          onChange={onChange}
          placeholder="How can we help you?"
          rows={6}
          className="w-full rounded-md border border-gray-200 px-4 py-3 placeholder:text-muted-foreground resize-vertical"
        />

        <div className="flex pb-6 justify-center">
          <Button
            type="submit"
            className="bg-amber-400 text-black hover:bg-amber-500"
          >
            Send message
          </Button>
        </div>
      </form>
    </DialogContent>
  );
}
