import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Bell, Eye, Zap } from "lucide-react";
import HowItWorkCard from "./how-it-work-card";
export function HowitWorks() {
  const steps = [
    {
      icon: Eye,
      title: "Analyze Visuals",
      description:
        "Process millions of visuals with AI from the entire energy system quickly, from any source to deliver accurate asset and defect insights.",
      imageSrc: "/wastedrone.jpg",
      imageAlt: "Drone waste management solution overview",
    },
    {
      icon: Bell,
      title: "Alert Teams",
      description:
        "Empower the right people at the right time with alerts across the workflow to enable quick, informed decisions.",
      imageSrc: "/call.jpg",
      imageAlt: "Team alert system dashboard",
    },
    {
      icon: Zap,
      title: "Accelerate Operations",
      description:
        "Optimize implementation of new assets, respond to incidents quickly, and reduce operational maintenance in the field.",
      imageSrc: "/tractor.jpg",
      imageAlt: "Accelerated operations workflow",
    },
  ];

  return (
    <div className=" space-y-10 mb-10">
      <h2 className="font-semibold text-center  text-3xl lg:text-4xl text-primary uppercase leading-tight tracking-wide">
        How It Works
      </h2>
      <Carousel className="md:w-full w-3/5 max-w-5xl mx-auto md:h-[402px] h-fit rounded-none">
        <CarouselContent>
          {steps.map((step, index) => (
            <CarouselItem key={index}>
              <Card className="md:h-[402px] h-fit p-0 rounded-none border border-primary/20">
                <CardContent className="p-0">
                  <HowItWorkCard
                    icon={step.icon}
                    title={step.title}
                    description={step.description}
                    imageSrc={step.imageSrc}
                    imageAlt={step.imageAlt}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className=" rounded-none border-primary/60 text-primary cursor-pointer" />
        <CarouselNext className="rounded-none border-primary/60 text-primary cursor-pointer" />
      </Carousel>
    </div>
  );
}
