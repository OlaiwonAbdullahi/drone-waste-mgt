import Image from "next/image";
import React from "react";

const Solution = () => {
  return (
    <section
      id="solution"
      className="flex md:flex-row-reverse flex-col items-start justify-between gap-16 px-8 py-16 lg:px-20 lg:py-24 bg-white"
    >
      <div className="flex flex-col items-start justify-start space-y-8 max-w-2xl">
        <h2 className="font-semibold playfair text-3xl lg:text-4xl text-primary uppercase leading-tight">
          Our Solution Overview
        </h2>

        <div className="font-light leading-relaxed poppins text-lg text-gray-700">
          <p className="mb-6">
            Our solution combines AI algorithms and drone technology to create
            an intelligent waste management system. Here&apos;s how it works:
          </p>

          <ul className="space-y-6 ">
            <li className="flex flex-col">
              <h3 className="font-bold text-primary mb-2">
                1.Automated Waste Collection:
              </h3>
              <p>
                Drones equipped with computer vision technology autonomously
                identify and collect waste from designated areas, reducing the
                need for manual intervention and streamlining the collection
                process.
              </p>
            </li>

            <li className="flex flex-col">
              <h3 className="font-bold text-primary mb-2">
                2.Waste Segregation and Sorting:
              </h3>
              <p>
                AI-powered image recognition algorithms analyze the collected
                waste to identify recyclable and non-recyclable materials. This
                enables efficient segregation and sorting, maximizing recycling
                potential and reducing landfill waste.
              </p>
            </li>

            <li className="flex flex-col">
              <h3 className="font-bold text-primary mb-2">
                3.Real-time Data Analysis:
              </h3>
              <p>
                The system generates real-time data and analytics, providing
                insights on waste patterns, recycling rates, and areas requiring
                attention. This information aids in decision-making and
                optimizing waste management strategies.
              </p>
            </li>

            <li className="flex flex-col">
              <h3 className="font-bold text-primary mb-2">
                4.Streamlined Recycling Processes:
              </h3>
              <p>
                By facilitating accurate waste segregation, the Drone Waste
                Management System enhances recycling efficiency. It enables
                recycling facilities to receive pre-sorted waste, streamlining
                their operations and increasing overall recycling rates.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-shrink-0 sticky top-8">
        <div className="overflow-hidden">
          <Image
            src="/wastedrone.jpg"
            alt="Drone waste management solution overview"
            width={600}
            height={400}
            className="w-full max-w-[600px] h-[400px] object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Solution;
