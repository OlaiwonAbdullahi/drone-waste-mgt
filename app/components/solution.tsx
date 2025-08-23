"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const Solution: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<string>("/wastedrone.jpg");

  // Ensure type safety for refs → HTMLLIElement or null
  const listItemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = listItemRefs.current.indexOf(
              entry.target as HTMLLIElement
            );

            switch (index) {
              case 0:
                setCurrentImage("/drone.jpg");
                break;
              case 1:
                setCurrentImage("/maped.jpg");
                break;
              case 2:
                setCurrentImage("/call.jpg");
                break;
              case 3:
                setCurrentImage("/children.jpg");
                break;
              default:
                setCurrentImage("/drone.jpg");
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-100px 0px",
      }
    );

    listItemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      listItemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="solution" className="bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex md:flex-row-reverse flex-col items-start justify-between gap-16 px-8 py-16 lg:px-20 lg:py-24">
          <div className="flex flex-col items-start justify-start space-y-8 max-w-2xl">
            <h2 className="font-semibold playfair text-3xl lg:text-4xl text-primary uppercase leading-tight tracking-wide">
              Solution
            </h2>

            <div className="font-light leading-relaxed poppins text-lg text-gray-700">
              <ul className="space-y-6">
                <li
                  ref={(el: HTMLLIElement | null) => {
                    listItemRefs.current[0] = el;
                  }}
                  className="flex flex-col transition-all duration-700 ease-in-out"
                >
                  <h3 className="font-bold text-primary mb-2">
                    Autonomous AI-Powered Drones
                  </h3>
                  <p>
                    We deploy advanced drones equipped with computer vision and
                    machine learning to autonomously scan roads, highways, and
                    communities.
                  </p>
                </li>

                <li
                  ref={(el: HTMLLIElement | null) => {
                    listItemRefs.current[1] = el;
                  }}
                  className="flex flex-col transition-all duration-700 ease-in-out"
                >
                  <h3 className="font-bold text-primary mb-2">
                    Real-Time Waste Mapping & Reporting
                  </h3>
                  <p>
                    Our system identifies, classifies, and maps waste or debris
                    instantly using AI algorithms combined with GPS tracking.
                    This creates accurate, location-based reports that provide
                    authorities and organizations with actionable insights for
                    faster cleanup responses.
                  </p>
                </li>

                <li
                  ref={(el: HTMLLIElement | null) => {
                    listItemRefs.current[2] = el;
                  }}
                  className="flex flex-col transition-all duration-700 ease-in-out"
                >
                  <h3 className="font-bold text-primary mb-2">
                    Instant Alerts for Quick Action
                  </h3>
                  <p>
                    The system doesn&apos;t just collect data—it delivers it
                    where it matters. Cleanup teams, city managers, and
                    environmental agencies receive instant alerts and visual
                    evidence, enabling them to prioritize critical issues and
                    allocate resources efficiently.
                  </p>
                </li>

                <li
                  ref={(el: HTMLLIElement | null) => {
                    listItemRefs.current[3] = el;
                  }}
                  className="flex flex-col transition-all duration-700 ease-in-out"
                >
                  <h3 className="font-bold text-primary mb-2">
                    Scalable, Sustainable Monitoring
                  </h3>
                  <p>
                    Built for scalability, our solution can cover vast roadway
                    networks and adapt to diverse environments. By reducing
                    reliance on manual inspections, it lowers costs, accelerates
                    response times, and contributes to long-term environmental
                    sustainability and public health protection.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Right side (Image) */}
          <div className="flex-shrink-0 sticky top-8">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={currentImage}
                alt="Drone waste management solution overview"
                width={600}
                height={400}
                className="w-full max-w-[600px] h-[400px] object-cover transition-all duration-700 ease-in-out"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
