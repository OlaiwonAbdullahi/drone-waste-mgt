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
    <div className="max-w-6xl mx-auto bg-white rounded-none shadow-lg overflow-hidden flex justify-between">
      <div className="text-center w-1/2 p-6 flex flex-col justify-center">
        <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-none flex items-center justify-center border border-primary">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-bold text-[45px] text-primary mb-2">{title}</h3>
        <p className="text-xl text-gray-600 leading-relaxed">{description}</p>
      </div>
      <div className="w-1/2">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={400}
          className="w-full max-w-[600px] h-[400px] object-cover transition-all duration-700 ease-in-out"
        />
      </div>
    </div>
  );
};

export default HowItWorkCard;
