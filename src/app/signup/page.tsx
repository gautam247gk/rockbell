import Link from "next/link";
import { GalleryVerticalEnd, Users } from "lucide-react";

export default function SignupIndex() {
  return (
    <main className="container text-secondary lg:mt-[-150px] max-w-3xl px-4 py-24">
      <h1 className="text-3xl font-bold">Sign up for free with Rockbell</h1>
      <p className="mt-3">
        Already have an account?{" "}
        <Link href="/login" className="underline font-bold">
          Log in here.
        </Link>
      </p>

      <div className="mt-10 space-y-6">
        <Link
          href="/signup/user"
          className="block rounded-lg bg-white p-6 shadow-md hover:shadow-lg"
        >
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center text-white h-10 w-10 rounded-full bg-primary">
              <Users />
            </div>
            <div>
              <div className="font-semibold">Sign up as a parent</div>
              <div className="text-sm text-gray-500">
                Discover and book events for children
              </div>
            </div>
          </div>
        </Link>

        <Link
          href="/signup/organiser"
          className="block rounded-lg bg-white p-6 shadow-md hover:shadow-lg"
        >
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center text-white h-10 w-10 rounded-full bg-primary">
              <GalleryVerticalEnd />
            </div>
            <div>
              <div className="font-semibold">Sign up as an organiser</div>
              <div className="text-sm text-gray-500">
                List your organisation&apos;s events and services
              </div>
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}
