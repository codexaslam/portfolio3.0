import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const AboutMe = () => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Accomplished software engineer with 5+ years of experience
          specializing in technologies such as React.js, Next.js, Flutter,
          MongoDB, MySQL, Express.js, and Nest.js. Strong focus on functional
          programming, performance optimization, and scalable design.
          Experienced in cloud technologies like AWS, Docker, and Kubernetes for
          deploying robust applications
        </p>
      </CardContent>
    </Card>
  );
};
