"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const Problem = () => {
  const [currentImage, setCurrentImage] = useState("/wastedrone.jpg");
  const secondParagraphRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentImage("/drainage.jpg");
          } else {
            setCurrentImage("/dump.jpg");
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: "-100px 0px",
      }
    );

    if (secondParagraphRef.current) {
      observer.observe(secondParagraphRef.current);
    }

    return () => {
      if (secondParagraphRef.current) {
        observer.unobserve(secondParagraphRef.current);
      }
    };
  }, []);

  return (
    <section id="solution" className="bg-white">
      <div className="max-w-7xl mx-auto pb-16 lg:pb-24">
        <div className="flex md:flex-row flex-col items-start justify-between gap-16 px-8 pt-16 lg:px-20 lg:pt-24">
          <div className="flex flex-col items-start justify-start space-y-8 max-w-2xl">
            <h2 className="font-semibold text-3xl lg:text-4xl text-primary uppercase leading-tight tracking-wide">
              Spot the Unseen Risks
            </h2>
            <div className="space-y-8 min-h-[400px]">
              <p className="font-light leading-relaxed poppins text-lg text-gray-700 transition-all duration-700 ease-in-out">
                Unmonitored waste not only disrupts the environment but also
                contributes to blocked drainage systems, increased flooding, and
                harmful impacts on public health
              </p>

              <p
                ref={secondParagraphRef}
                className="font-light leading-relaxed poppins text-lg text-gray-700 transition-all duration-700 ease-in-out"
              >
                Roadways and public spaces are increasingly threatened by waste
                and debris, resulting from illegal dumping, poor monitoring
                systems, and inefficient cleanup processes. Traditional methods
                of detecting and managing waste rely heavily on manual
                inspections, which are time-consuming, costly, and often fail to
                identify issues until they escalate into serious hazards.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 sticky top-8">
            <div className="overflow-hidden rounded-none shadow-lg">
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

export default Problem;
