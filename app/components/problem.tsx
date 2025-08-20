import { Button } from "@/components/ui/button";
import React from "react";

const Problem = () => {
  return (
    <section
      id="problem"
      className="w-full h-full py-16 lg:py-[70px] text-primary space-y-8 flex flex-col items-center justify-center max-w-3xl mx-auto"
    >
      <h2 className="text-3xl font-semibold text-primary uppercase text-center">
        The Challenge with Today’s Waste Management
      </h2>

      <p className="text-lg leading-relaxed text-center px-8  md:px-0">
        In traditional waste management systems, the process of waste
        collection, segregation, and recycling is often inefficient,
        time-consuming, and prone to errors. Additionally, inadequate waste
        disposal practices contribute to environmental pollution and hinder
        recycling initiatives. To address these challenges, we have developed
        the Drone Waste Management System.
      </p>
      <Button
        variant={"default"}
        className=" rounded-none  font-medium text-secondary "
      >
        Join the Movement
      </Button>
    </section>
  );
};

export default Problem;
