"use client";

import { Button } from "@/components/ui/button";

export default function NextSteps() {
  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-primary-100 to-secondary">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 flex items-center justify-center gap-2">
          Next Steps & Funding Request
        </h2>

        <p className="text-lg text-primary leading-relaxed mb-4">
          We are excited to participate in the{" "}
          <span className="font-bold ">NVIDIA Inception Program</span> and seek
          your support to further advance our Drone Waste Management System. The
          funding provided through the program will enable us to enhance the
          system&apos;s capabilities, conduct extensive field tests, and refine
          the AI algorithms for optimal performance.
        </p>

        <p className="text-lg text-primary leading-relaxed mb-8">
          Additionally, we look forward to exploring potential collaborations
          and partnerships within the{" "}
          <span className="font-bold">NVIDIA Inception community</span>,
          leveraging the expertise and resources available to accelerate the
          deployment of our solution on a broader scale.
        </p>

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
