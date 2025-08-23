"use client";

import { Button } from "@/components/ui/button";

export default function NextSteps() {
  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-primary-100 to-secondary">
      <div className="max-w-5xl  mx-auto text-center">
        <h2 className="uppercase text-3xl md:text-4xl font-bold text-primary mb-6 flex items-center justify-center gap-2">
          Join The Movement
        </h2>

        <div className="space-y-4  p-2">
          <p>
            We have already developed and deployed our AI-powered drone system
            to detect, map, and report waste in real time—delivering cleaner
            roads, safer communities, and stronger environmental protection.
            Now, we are seeking funding to{" "}
            <strong>
              scale our operations, expand coverage, and enhance our technology
            </strong>{" "}
            with advanced analytics and broader integrations.
          </p>

          <div className="self-start">
            <p className="font-medium text-start">Your support will help us:</p>
            <ul className="list-disc pl-6 space-y-1  list-inside text-start">
              <li>
                Extend our monitoring networks across more cities and regions
              </li>
              <li>Improve real-time analytics for faster decision-making</li>
              <li>
                Strengthen environmental sustainability efforts and public
                health protection
              </li>
              <li>Create cleaner, safer, and smarter communities at scale</li>
            </ul>
          </div>

          <p>
            Together, we can transform waste management and drive meaningful
            impact for people and the planet.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className=" rounded-none">Support Our Mission</Button>
          <Button
            variant="outline"
            className=" border border-primary bg-transparent rounded-none"
          >
            Partner with Us
          </Button>
        </div>
      </div>
    </section>
  );
}
