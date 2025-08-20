import { Button } from "@/components/ui/button";
import React from "react";

const Navbar = () => {
  return (
    <section
      id="home"
      className="bg-primary text-white p-4 px-[65px] h-20 flex flex-col justify-center "
    >
      <div className="flex justify-between items-center">
        <div className="text-2xl font-semibold">DroneWasteMgt</div>
        <nav className="flex space-x-8 uppercase">
          <div className="hover:border-b-2">
            <a href="#home">Home</a>
          </div>
          <div className="hover:border-b-2">
            <a href="#about">About Us</a>
          </div>
          <div className="hover:border-b-2">
            <a href="#benefit">Benefit and Impact</a>
          </div>
        </nav>
        <div className="">
          <Button variant={"secondary"} className=" rounded-none font-medium">
            Fund Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
