import Image from "next/image";
import React from "react";

const Technical = () => {
  return (
    <section
      id="technical"
      className="flex md:flex-row-reverse flex-col items-start justify-between gap-16 px-8 py-16 lg:px-20 lg:py-24 bg-white"
    >
      <div className="flex flex-col items-start justify-start space-y-8 max-w-2xl">
        <h2 className="font-semibold playfair text-3xl lg:text-4xl text-primary uppercase leading-tight">
          Our Technical Overview
        </h2>

        <div className="font-light leading-relaxed poppins text-lg text-gray-700">
          <p className="mb-6">
            Our Drone Waste Management System incorporates several key
            components to streamline waste management processes:
          </p>

          <ul className="space-y-6">
            <li className="flex flex-col">
              <h3 className="font-bold text-primary mb-2">
                1.Drone Technology:
              </h3>
              <p>
                We utilize drones equipped with advanced imaging systems and
                sensors to autonomously navigate designated areas and identify
                waste materials.
              </p>
            </li>

            <li className="flex flex-col">
              <h3 className="font-bold text-primary mb-2">
                2.GPS and Coordinate Database:
              </h3>
              <p>
                The drones are integrated with GPS technology to accurately
                track their location and collect waste data. The coordinates of
                waste collection points are stored in a secure and centralized
                database.
              </p>
            </li>

            <li className="flex flex-col">
              <h3 className="font-bold text-primary mb-2">
                3. Image Recognition and AI Algorithms:
              </h3>
              <p>
                The captured images of waste materials are processed using
                AI-powered image recognition algorithms. These algorithms
                classify the waste into recyclable and non-recyclable categories
                based on predefined criteria.
              </p>
            </li>

            <li className="flex flex-col">
              <h3 className="font-bold text-primary mb-2">
                4.Waste Segregation and Collection:
              </h3>
              <p>
                Once the waste is classified, the system guides the drones to
                collect the recyclable materials and transport them to the
                appropriate recycling facilities. Non-recyclable waste is
                flagged for proper disposal.
              </p>
            </li>
            <li className="flex flex-col">
              <h3 className="font-bold text-primary mb-2">
                5.Notification System:
              </h3>
              <p>
                To ensure effective waste management, the system sends real-time
                notifications to waste management personnel, alerting them of
                the collected waste, recycling requirements, and any operational
                issues that may arise.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-shrink-0 sticky top-8">
        <div className="overflow-hidden">
          <Image
            src="/drone.jpg"
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

export default Technical;
