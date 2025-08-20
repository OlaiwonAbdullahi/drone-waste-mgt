import React from "react";
import { BadgeDollarSign, Globe2, Recycle, Sparkles } from "lucide-react";

const Benefit = () => {
  return (
    <section
      id="benefit"
      className="px-8 py-16 lg:px-20 lg:py-24 bg-primary text-white  overflow-hidden"
    >
      <div className=" z-10">
        <div className="  mb-16  space-y-3">
          <h2 className="font-semibold  text-3xl lg:text-4xl text-white uppercase leading-tight text-center">
            Benefits and Impact
          </h2>
          <p className=" text-center">
            Our Drone Waste Management System offers several key benefits
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="group bg-white/5 backdrop-blur-sm rounded-none p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12  border border-white/20 bg-white/5 rounded-none flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <Sparkles />
              </div>
              <h2 className="text-xl font-bold text-white group-hover:text-blue-500 transition-colors duration-300">
                Improved Efficiency
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              The automation of waste collection and segregation processes
              eliminates the need for manual labor, saving time and resources
              while improving overall operational efficiency.
            </p>
          </div>

          <div className="group bg-white/5 backdrop-blur-sm rounded-none p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12  border border-white/20 bg-white/5 rounded-none flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <Recycle />
              </div>
              <h2 className="text-xl font-bold text-white group-hover:text-blue-500 transition-colors duration-300">
                Enhanced Recycling Rates
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              By accurately identifying recyclable materials, our system
              increases recycling rates and promotes a circular economy,
              reducing the environmental impact of waste.
            </p>
          </div>

          <div className="group bg-white/5 backdrop-blur-sm rounded-none p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12  border border-white/20 bg-white/5 rounded-none flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <BadgeDollarSign />
              </div>
              <h2 className="text-xl font-bold text-white group-hover:text-blue-500 transition-colors duration-300">
                Cost Savings:
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              The optimized waste management processes reduce operational costs
              associated with manual collection and improve resource allocation
              for recycling facilities.
            </p>
          </div>

          <div className="group bg-white/5 backdrop-blur-sm rounded-none p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12  border border-white/20 bg-white/5 rounded-none flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <Globe2 />
              </div>
              <h2 className="text-xl font-bold text-white group-hover:text-blue-500 transition-colors duration-300">
                Environmental Sustainability:
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              By promoting effective waste management practices, our solution
              contributes to environmental sustainability and helps create
              cleaner and healthier communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
