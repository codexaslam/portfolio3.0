import { Award, CalendarDays, GraduationCap } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const education = {
  degree:
    "Master's Degree Programme in Information Technology: Computer Engineering",
  university: "Abo Akademi University",
  duration: "Aug 2024 – Jul 2026",
  coursework: [
    "Data Science",
    "Machine Learning",
    "Artificial Intelligence",
    "Cloud Computing",
    "Parallel Programming",
    "GPU Programming",
    "Project Management",
    "Data-driven Computing Architectures",
    "System Safety",
  ],
  highlights: [
    "Advanced coursework in AI-driven software safety (ISO 26262 standards) and ethical AI deployment, ensuring compliance with EU regulations for mission-critical systems.",
    "Designed fault-tolerant data systems using Kafka and Kubernetes to meet industry demands for cloud-native scalability.",
  ],
};

const awards = [
  {
    title: "Winner and Best Business Potential",
    event: "ICT ShowRoom 2025",
    description:
      "Winner and Best Business Potential out of 198 participants (34+ teams across Finland)",
    year: "2025",
  },
  {
    title: "Exceptional Leadership Award",
    organization: "SELISE",
    description:
      "Recognized for leading critical projects, mentoring developers, and conducting technical sessions to enhance team capabilities.",
    year: "2023",
  },
  {
    title: "Outstanding Ownership Award",
    organization: "SELISE",
    description:
      "Acknowledged for driving project success by taking full ownership, guiding the team, and ensuring seamless execution.",
    year: "2022",
  },
];

export const Education = () => {
  return (
    <>
      {/* Education Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="size-5" />
            Education
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">{education.degree}</h3>
              <p className="text-muted-foreground">{education.university}</p>
              <p className="text-xs text-muted-foreground mt-1 flex items-center">
                <CalendarDays className="size-3 mr-2" />
                {education.duration}
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-2">Coursework:</h4>
              <div className="flex flex-wrap gap-1">
                {education.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Key Achievements:</h4>
              <ul className="space-y-2">
                {education.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground">
                    • {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Awards Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="size-5" />
            Awards & Recognition
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-6">
            {awards.map((award, idx) => (
              <li key={idx} className="border-b last:border-b-0 pb-4 last:pb-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold">{award.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {award.event || award.organization}
                    </p>
                    <p className="text-sm mt-2">{award.description}</p>
                  </div>
                  <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                    {award.year}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};
