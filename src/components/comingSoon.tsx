import React from "react";
import { Button } from "./ui/button";

export default function ComingSoon() {
  return (
    <div
      className={
        "flex items-center justify-center min-h-screen min-w-screen bg-gradient-to-b from-white via-gray-100 to-white text-secondary"
      }
    >
      <div className="text-center p-8">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Coming Soon
        </h1>

        {/* Subtext */}
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          We&apos;re putting the finishing touches on something great. Sign up below
          and we&apos;ll let you know as soon as we launch.
        </p>

        {/* Email signup */}
        <form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className={
              "w-full sm:flex-1 px-4 py-3 rounded-xl bg-white border border-gray-300focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            }
          />

          <Button variant="default">Notify Me</Button>
        </form>
      </div>
    </div>
  );
}
