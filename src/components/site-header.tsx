"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Logo } from "./ui/logo";
import { Button } from "./ui/button-custom";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "./ui/sheet";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ContactForm from "@/components/contactForm";

const nav = [
  { id: "features", label: "Features" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact us" },
];

export function SiteHeader() {
  const headerRef = useRef<HTMLElement | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const el = headerRef.current;
    const originalHeight = el?.offsetHeight ?? 64;

    function onScroll() {
      setScrolled(window.scrollY > originalHeight);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // smooth scroll handler for hash links (prevents navigation)
  function handleHashScroll(e: React.MouseEvent, id: string) {
    e.preventDefault();

    // If we're not on the home page, navigate there with the hash first.
    // After navigation, attempt to scroll to the element.
    if (pathname !== "/") {
      router.push(`/#${id}`);
      // attempt to scroll after navigation / render; small delay is usually sufficient
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 120);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // update history so the hash appears in the URL
      if (
        typeof window !== "undefined" &&
        typeof history !== "undefined" &&
        history.replaceState
      ) {
        history.replaceState(null, "", `#${id}`);
      }
    }
  }

  return (
    <header
      ref={headerRef}
      className={`sticky h-[56px] sm:h-[64px] top-0 z-50 w-full p-0 text-foreground transition-colors duration-200 ${
        scrolled ? "bg-white " : "bg-transparent"
      }`}
    >
      <div className="container max-w-7xl px-4 md:px-6">
        <div className="grid w-full grid-cols-2 items-center justify-between py-2 md:grid-cols-3">
          <Link href="/" className="flex items-center justify-start gap-2">
            <Logo />
            <span className="sr-only">Rockbell</span>
          </Link>

          <nav className="hidden w-full items-center justify-center gap-6 px-6 text-sm font-medium md:flex">
            {nav.map((item) => {
              if (item.id === "contact") {
                return (
                  <Dialog key={item.id}>
                    <DialogTrigger className="text-primary-foreground cursor-pointer dark:text-secondary-foreground">
                      Contact Us
                    </DialogTrigger>
                    <ContactForm />
                  </Dialog>
                );
              }
              return (
                <a
                  key={item.id}
                  href={"#" + item.id}
                  onClick={(e) => handleHashScroll(e, item.id)}
                  className="text-primary-foreground  dark:text-secondary-foreground"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center justify-end gap-4">
            <div className="inline-flex items-center rounded-full border px-2.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-white hover:bg-primary/80 whitespace-nowrap py-1.5">
              <Link href="/events">Find events</Link>
            </div>

            <div className="hidden items-center gap-2 text-sm font-medium md:flex">
              <Link
                href="/login"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-secondary bg-background text-foreground hover:bg-secondary hover:text-white h-10 px-4 py-2 min-w-[81px]"
              >
                Sign in
              </Link>
            </div>

            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button
                    aria-label="Open menu"
                    className="inline-flex items-center justify-center p-2 rounded-md"
                  >
                    <MenuIcon className="h-5 w-5" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="flex items-center justify-between px-4 py-3">
                    <Link href="/" className="inline-flex items-center">
                      <Logo />
                    </Link>
                  </div>
                  <div className="px-4 py-2 flex flex-col gap-3">
                    {nav.map((item) => {
                      if (item.id === "contact") {
                        return (
                          <Dialog key={item.id}>
                            <SheetClose asChild>
                              <DialogTrigger className="text-lg items-start text-left font-semibold py-2">
                                Contact Us
                              </DialogTrigger>
                            </SheetClose>
                            <ContactForm />
                          </Dialog>
                        );
                      }
                      return (
                        <SheetClose asChild key={item.id}>
                          <a
                            href={"#" + item.id}
                            onClick={(e) => handleHashScroll(e, item.id)}
                            className="text-lg font-semibold py-2"
                          >
                            {item.label}
                          </a>
                        </SheetClose>
                      );
                    })}
                    <div className="mt-4 flex flex-col gap-2">
                      <Button size="sm">
                        {" "}
                        <a href="/events">Find events</a>
                      </Button>
                      <Button variant="secondary" className="bg-white py-2">
                        <a href="/login">Sign in</a>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
