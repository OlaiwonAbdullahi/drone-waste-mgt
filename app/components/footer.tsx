import React from "react";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary text-secondary py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="">
            <Image src={"/logo.png"} height={254} width={254} alt="logo" />
          </div>{" "}
          <p className="text-sm leading-relaxed">
            Lisa Technology summary{" "}
            <span className="font-semibold">AI-powered autonomous drones</span>{" "}
            to detect, map, and report waste and debris on roadways in real
            time. By combining{" "}
            <span className="font-semibold">
              computer vision, machine learning, GPS tracking, and instant data
              processing
            </span>
            , we provide accurate insights that support faster cleanup, protect
            public health, and promote environmental sustainability.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-blue-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-blue-400 transition-colors"
              >
                LISA
              </a>
            </li>

            <li>
              <a
                href="#solution"
                className="hover:text-blue-400 transition-colors"
              >
                Solution
              </a>
            </li>
            <li>
              <a
                href="#solution"
                className="hover:text-blue-400 transition-colors"
              >
                Vertical
              </a>
            </li>
            <li>
              <a
                href="#impact"
                className="hover:text-blue-400 transition-colors"
              >
                Benefits & Impact
              </a>
            </li>
            <li>
              <a
                href="#impact"
                className="hover:text-blue-400 transition-colors"
              >
                Join the Movement
              </a>
            </li>
            <li>
              <a
                href="#impact"
                className="hover:text-blue-400 transition-colors"
              >
                Book A Demo
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Connect With Us
          </h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:info@silveraautomotives.com"
              className="hover:text-blue-400"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Silvera Automotives. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
