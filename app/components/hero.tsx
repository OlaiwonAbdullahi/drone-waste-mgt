import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen px-6 md:px-12 lg:px-[85px] py-16 lg:py-[70px] rounded-b-[80px] text-white">
      <div className=" absolute top-0 left-0 w-full h-full -z-30">
        <video
          src="https://res.cloudinary.com/du7ljfa63/video/upload/v1755691454/13772-251867974_small_myinco.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-6 w-3/4">
        <h2 className="font-semibold text-3xl lg:text-[50px] leading-18 uppercase">
          Revolutionizing Waste <br /> Management with
          <br /> AI-powered Drones
        </h2>
        <p className="font-extralight text-[18px] leading-relaxed md:leading-[35px] max-w-2xl">
          The Drone Waste Management System is an advanced solution developed by
          Silvera Automotives that leverages AI and drone technology to
          revolutionize waste management processes. Our goal is to enhance
          sustainability efforts and promote effective recycling practices
          through the automation and optimization of waste collection and
          recycling operations.
        </p>
        <div className="flex items-center justify-start gap-6">
          <Button variant={"secondary"} className=" rounded-none font-medium">
            Learn More
          </Button>
          <Button
            variant={"outline"}
            className=" rounded-none font-medium text-secondary bg-transparent"
          >
            Join the Movement
          </Button>
        </div>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full h-[80px] lg:h-[120px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
          fill="#FFFFFF"
        ></path>
      </svg>
    </section>
  );
};

export default Hero;
