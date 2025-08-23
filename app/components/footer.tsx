"use client";
import React, { useState } from "react";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add API call or any action here
  };

  return (
    <footer className="bg-primary text-secondary py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 items-start gap-8">
        {/* Logo & Description */}
        <div>
          <Image src={"/logo.png"} height={254} width={254} alt="logo" />
          <p className="text-sm leading-relaxed mt-4">
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

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              "Home",
              "LISA",
              "Solution",
              "Vertical",
              "Benefits & Impact",
              "Join the Movement",
              "Book A Demo",
            ].map((link, idx) => (
              <li key={idx}>
                <a
                  href={`#${link
                    .toLowerCase()
                    .replace(/ & /g, "-")
                    .replace(/\s+/g, "-")}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
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

        {/* Subscribe Form */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Subscribe For Update
          </h3>
          <form className="space-y-3 flex flex-col" onSubmit={handleSubmit}>
            <Input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="rounded-none placeholder:text-white text-white p-2"
              value={formData.firstName}
              onChange={handleChange}
            />
            <Input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="rounded-none placeholder:text-white text-white p-2"
              value={formData.lastName}
              onChange={handleChange}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              className="rounded-none placeholder:text-white text-white p-2"
              value={formData.email}
              onChange={handleChange}
            />
            <div className="flex justify-end">
              <Button
                type="submit"
                variant="secondary"
                className="rounded-none w-fit"
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Lisa Tech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
