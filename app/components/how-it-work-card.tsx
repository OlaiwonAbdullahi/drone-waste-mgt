import Image from "next/image";
import React from "react";

interface HowItWorkCardProps {
  icon: React.ElementType; // component passed as Icon
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const HowItWorkCard: React.FC<HowItWorkCardProps> = ({
  icon: Icon,
  title,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-none shadow-lg overflow-hidden flex flex-col md:flex-row justify-between">
      <div className="text-center md:w-1/2 w-full p-6 flex flex-col justify-center">
        <div className="w-12 h-12 mx-auto mb-3 bg-white rounded-none flex items-center justify-center border border-primary">
          <Icon className="md:w-8 md:h-8 w-6 h-6 text-primary" />
        </div>
        <h3 className="font-bold md:text-[45px] text-2xl text-primary mb-2">
          {title}
        </h3>
        <p className="md:text-xl text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
      <div className="md:w-1/2 w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={400}
          className="w-full max-w-[600px] md:h-[400px] h-[200px] object-cover transition-all duration-700 ease-in-out"
        />
      </div>
    </div>
  );
};

export default HowItWorkCard;
