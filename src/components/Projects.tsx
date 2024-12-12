import { cn } from "@/lib/utils";
import Link from "next/link";

import { ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export const projects = [
  {
    title: "SUNRISE MOMENTS",
    description:
      "Swiss telco's VIP loyalty app. Exclusive pre-sales, event perks, and smart offers. Digital keys to unforgettable experience. The platform features personalized offers, events, and unique services to create memorable moments for users.",
    tech: "Next.js",
    link: "https://www.sunrise.ch/en/moments",
  },
  {
    title: "ViCAFE ONLINE SHOP",
    description:
      "ViCAFE is a Swiss coffee company offering sustainably sourced coffee beans, subscriptions, and office solutions. Their online shop provides home delivery with a focus on quality and positive impact on farming communities.",
    tech: "React",
    link: "https://vicafe.ch/",
  },
  {
    title: "ViCAFE LOYALTY",
    description:
      "The ViCAFE Loyalty app allows users to join a loyalty program and earn free coffee with every hot beverage purchased at ViCAFE Espresso Bars. It provides a seamless experience for coffee enthusiasts to track their rewards and enjoy exclusive offers.",
    tech: "Flutter",
    link: "https://apps.apple.com/us/app/vicafe-loyalty/id6474923930",
  },
  {
    title: "NOUNISH IDENTITY",
    description:
      "The Nouns Name Service (NNS) offers a decentralized platform for acquiring unique, Noun-inspired domain names. It uses web3 technology to create personalized digital identities through the Nouns Protocol.",
    tech: "Next.js",
    link: "https://nns.xyz/",
  },
];

const techColors = {
  "Next.js": "bg-blue-500",
  Flutter: "bg-green-500",
  "Vue.js": "bg-purple-500",
  React: "bg-yellow-500",
};

export const Projects = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4 mt-6">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <Card key={i}>
            <CardContent className="pt-6 h-full">
              <div className="flex flex-col h-full">
                <Link
                  href={p.link}
                  className="font-semibold text-primary hover:underline"
                >
                  {p.title}
                </Link>
                <p className="text-sm text-muted-foreground mt-1 mb-4">
                  {p.description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div
                      className={cn(
                        "size-4 rounded-full",
                        techColors[p.tech as keyof typeof techColors]
                      )}
                    />
                    <span className="text-xs font-medium text-muted-foreground">
                      {p.tech}
                    </span>
                  </div>
                  <Link
                    href={p.link}
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    View Project
                    <ExternalLink className="inline-block size-3" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};
