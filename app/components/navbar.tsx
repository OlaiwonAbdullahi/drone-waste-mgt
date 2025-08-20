"use client";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <section
      id="home"
      className="bg-primary text-white p-4 lg:px-[65px] md:px-8 px-4 min-h-20 flex flex-col justify-center relative"
    >
      <div className="flex justify-between items-center">
        <div className="text-xl md:text-2xl font-semibold z-20">
          DroneWasteMgt
        </div>

        <nav className="hidden lg:flex space-x-8 uppercase">
          <div className="hover:border-b-2 transition-all duration-200">
            <a href="#home" className="py-1">
              Home
            </a>
          </div>
          <div className="hover:border-b-2 transition-all duration-200">
            <a href="#about" className="py-1">
              About Us
            </a>
          </div>
          <div className="hover:border-b-2 transition-all duration-200">
            <a href="#benefit" className="py-1">
              Benefit and Impact
            </a>
          </div>
        </nav>

        <div className="hidden lg:block">
          <Button
            variant={"secondary"}
            className="rounded-none cursor-pointer font-medium"
          >
            Fund Us
          </Button>
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden z-20 p-2 hover:bg-white/10 rounded transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu size={24} className="text-white" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-white/15 backdrop-blur-sm bg-opacity-50 z-10 lg:hidden"
          onClick={closeMenu}
        ></div>
      )}

      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-primary z-15 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-24 px-6">
          <nav className="flex flex-col space-y-6 uppercase">
            <div className="hover:border-b-2 border-white pb-1">
              <a
                href="#home"
                onClick={closeMenu}
                className="block py-2 text-lg"
              >
                Home
              </a>
            </div>
            <div className="hover:border-b-2 border-white pb-1">
              <a
                href="#about"
                onClick={closeMenu}
                className="block py-2 text-lg"
              >
                About Us
              </a>
            </div>
            <div className="hover:border-b-2 border-white pb-1">
              <a
                href="#benefit"
                onClick={closeMenu}
                className="block py-2 text-lg"
              >
                Benefit and Impact
              </a>
            </div>
          </nav>

          <div className="mt-8">
            <Button
              variant={"secondary"}
              className="w-full rounded-none cursor-pointer font-medium"
              onClick={closeMenu}
            >
              Fund Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
