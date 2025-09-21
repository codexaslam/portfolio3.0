import Image from "next/image";

import { Briefcase, CalendarDays } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { JobImages } from "@/components/JobImages";

const jobs = [
  {
    role: "Software Engineer", // TODO: Replace with actual role
    company: "SELISE Digital Platforms", // TODO: Replace with actual company name
    logo: "/selise.png", // TODO: Replace with actual logo
    duration: "2021 - August 2024",
    description: [
      "Engineered a scalable website handling 500,000+ monthly users, achieving 99.99% uptime and reducing server response time by 40% through optimized architecture.",
      "Developed a mobile app with advanced features (QR scanning, real-time socket updates, geo-based notifications) that generated 30,000+ downloads within 30 days.",
      "Led a cross-functional development team of 5 engineers, improving team productivity by 25% through mentorship and implementing agile methodologies.",
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
      "Developed feature-rich web applications in real estate and medical sectors, supporting 70,000+ live users and increasing client business performance by 24%.",
      "Created a cross-platform audio meeting app that improved internal communication efficiency by 10x, enabling seamless real-time interactions across multiple devices",
      "Designed a comprehensive social medical app facilitating online doctor consultations, resulting in 5,000+ user registrations within the first three months.",
    ],
    link: "https://crantechllc.com/",
    images: ["/crantech_ex.png"],
  },
];

export const Experience = () => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Briefcase className="size-5" />
          Work Experience
        </CardTitle>
      </CardHeader>
      <CardContent>
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
  );
};
