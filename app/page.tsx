import React from "react";
import Hero from "./components/hero";
import Problem from "./components/problem";
import Solution from "./components/solution";
import Technical from "./components/technical";
import Benefit from "./components/benefit";
import NextStep from "./components/next-step";
import Footer from "./components/footer";

const Page = () => {
  return (
    <div>
      <Hero />
      <div className="" id="about">
        <Problem />
        <Solution />
        <Technical />
        <Benefit />
      </div>
      <NextStep />
      <Footer />
    </div>
  );
};

export default Page;
