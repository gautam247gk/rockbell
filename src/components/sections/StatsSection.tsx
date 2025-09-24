import * as React from "react";

export default function StatsSection() {
  return (
    <div
      id="stats"
      className="flex w-full flex-col bg-secondary text-secondary-foreground py-12 md:py-24 lg:py-24 "
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <section className="container py-8 md:py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-card text-card-foreground border text-center shadow-sm">
            <div className="p-6">
              <div className="space-y-4">
                <p className="text-5xl font-bold tracking-tighter text-secondary md:text-6xl">
                  50,000+
                </p>
                <h3 className="text-xl font-semibold">
                  Industry professionals searching
                </h3>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-card text-card-foreground border text-center shadow-sm">
            <div className="p-6">
              <div className="space-y-4">
                <p className="text-5xl font-bold tracking-tighter text-secondary md:text-6xl">
                  300+
                </p>
                <h3 className="text-xl font-semibold">
                  Industrial events listed
                </h3>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-card text-card-foreground border text-center shadow-sm">
            <div className="p-6">
              <div className="space-y-4">
                <p className="text-5xl font-bold tracking-tighter text-secondary md:text-6xl">
                  100%
                </p>
                <h3 className="text-xl font-semibold">
                  Trusted by event organizers
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
