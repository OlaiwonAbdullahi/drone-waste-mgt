import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-[85px] py-16 lg:py-[70px] text-white overflow-hidden rounded-b-[60px] md:rounded-b-[80px]">
      <div className="absolute inset-0 -z-30">
        <video
          src="https://res.cloudinary.com/du7ljfa63/video/upload/v1755691454/13772-251867974_small_myinco.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-4xl space-y-6 text-center md:text-left mx-auto md:mx-0">
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[50px] leading-tight uppercase">
          Intelligent Aerial <br className="hidden sm:block" />
          Survallance for <br className="hidden sm:block" />a Sustainable Future
        </h2>

        <p className="font-light text-base sm:text-lg md:text-xl leading-relaxed md:leading-[32px] max-w-2xl mx-auto md:mx-0">
          Proven AI-powerd drons intelligently identify ,map,and report waste
          supporting faster cleanup efforts,protecting public health,and
          advancing environmental sustainability.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6">
          <Button
            variant={"secondary"}
            className="rounded-none font-medium w-full sm:w-auto"
          >
            Get Started
          </Button>
          <Button
            variant={"outline"}
            className="rounded-none font-medium text-secondary bg-transparent w-full sm:w-auto"
          >
            Request a Demo
          </Button>
        </div>
      </div>

      <svg
        className="absolute bottom-0 border border-none left-0 w-full h-[60px] sm:h-[80px] lg:h-[120px]"
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
