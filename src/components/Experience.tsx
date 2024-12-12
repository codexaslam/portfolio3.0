import Image from "next/image";

import { CalendarDays } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { JobImages } from "@/components/JobImages";

const jobs = [
  {
    role: "Software Engineer", // TODO: Replace with actual role
    company: "SELISE Digital Platforms", // TODO: Replace with actual company name
    logo: "/selise.png", // TODO: Replace with actual logo
    duration: "2021 - August 2024",
    description: [
      "Led a web app and a mobile app team to success, guiding 5 junior developers to enhance their skills in full-stack and 2 developers in Flutter and stay current with emerging technologies.",
      "Architected a highly scalable website that seamlessly accommodates over 500,000 monthly users with zero downtime.",
      "Designed and launched a cutting-edge mobile app featuring QR scanning, real-time socket updates, and geo-based push notifications, achieving 30,000+ downloads in 30 days.",
    ],
    link: "https://selisegroup.com/",
    images: ["/selise_ex.png"],
  },
  {
    role: "Frontend Engineer", // TODO: Replace with actual role
    company: "Crantech LLC", // TODO: Replace with actual company name
    logo: "/crantech.svg", // TODO: Replace with actual logo
    duration: "2020 - 2021 April",
    description: [
      "Engineered real estate and medical web applications, supporting over 70,000 live users, and improving client business performance by 24% through enhanced user experiences and scalability.",
      "Designed a cross-platform audio meeting app that accelerated company communication by 10x, enabling real-time, seamless interactions across devices.",
      "Constructed a social medical app for online doctor consultations, digital prescriptions appointment booking, and remote patient management.",
    ],
    link: "https://crantechllc.com/",
    images: ["/crantech_ex.png"],
  },
];

export const Experience = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Work Experience</h2>
      <Card>
        <CardContent className="pt-6">
          <ul className="space-y-8">
            {jobs.map((j, i) => (
              <li key={i} className="border-b last:border-b-0 pb-8 last:pb-0">
                {/* Job Details */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={j.logo}
                    alt={j.company}
                    width={80}
                    height={40}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{j.role}</h3>
                    <p className="text-sm text-muted-foreground">{j.company}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                  <CalendarDays className="size-3 mr-2" />
                  {j.duration}
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  {j.description?.map((line, indx) => (
                    <li key={indx} className="!m-0">
                      <p className="text-sm">{line}</p>
                    </li>
                  ))}
                </ul>
                {/* Job Images */}
                <JobImages
                  role={j.role}
                  link={j.link}
                  images={j.images}
                  duration={j.duration}
                />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};
