import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  "TypeScript",
  "JavaScript",
  "ReactJS",
  "NextJS",
  "ReduxToolkit",
  "ReactQuery",
  "TailwindCSS",
  "ReactQuery",
  "MaterialUI",
  "SASS",
  "Flutter",
  "Firebase",
  "SQLite",
  "WebSockets",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
  "MySQL",
  "Redis",
  "Storyblok",
  "Git",
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
];

export const Skills = () => {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((s, i) => (
            <Badge key={i} variant="secondary">
              {s}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
