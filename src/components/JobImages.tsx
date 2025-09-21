"use client";

import Image from "next/image";
import Link from "next/link";

import { ExternalLink } from "lucide-react";

import { ClientOnly } from "@/components/ClientOnly";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface JobImagesProps {
  role: string;
  link: string;
  images: string[];
  duration: string;
}

export const JobImages = ({ role, link, images, duration }: JobImagesProps) => {
  return (
    <ClientOnly
      fallback={
        <div className="mt-4 h-24 bg-muted/50 rounded-md animate-pulse" />
      }
    >
      <div className="mt-4 flex space-x-2 overflow-x-auto pb-2 w-full">
        {images.map((img, idx) => (
          <Dialog key={idx}>
            <DialogTrigger asChild>
              <button className="p-0 border-none bg-transparent cursor-pointer">
                <Image
                  src={img}
                  width={100}
                  height={100}
                  alt={`Project Image for ${role}`}
                  className="rounded-md border h-full w-auto shadow-md object-cover hover:opacity-80 transition-opacity"
                />
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{role}</DialogTitle>
                <DialogDescription>{duration}</DialogDescription>
              </DialogHeader>
              <div className="mt-4 mx-auto space-y-2">
                <Image
                  width={400}
                  height={400}
                  src={img}
                  alt={`Project Image for ${role}`}
                  className="rounded-md border shadow-md object-cover w-full h-auto"
                />
                <Link
                  href={link}
                  target="_blank"
                  className="text-sm flex items-center justify-center text-blue-600 hover:underline mt-2"
                >
                  Visit Company Site
                  <ExternalLink className="size-4 ml-2" />
                </Link>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </ClientOnly>
  );
};
