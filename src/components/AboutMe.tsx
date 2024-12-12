import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const AboutMe = () => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Accomplished software engineer with 5+ years of expertise in frontend
          technologies, specializing in creating scalable, high-performance web
          and mobile applications. Strong focus on performance optimization, and
          scalable design. Proven leadership in managing high-traffic platforms
          handling over 500,000 monthly users and increasing business
          performance by 24%. Experienced in cloud technologies like AWS,
          Docker, and Kubernetes for deploying robust applications.
        </p>
      </CardContent>
    </Card>
  );
};
