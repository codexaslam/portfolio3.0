import Link from "next/link";
import Image from "next/image";

import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import {
    Card,
    CardContent
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const socials = [
    {
        name: "Github",
        link: "https://github.com/achris-alonzo30",
        icon: <FaGithub className="size-4" />
    },
    {
        name: "LinkedIn",
        link: "https://linkedin.com/in/lonzochris",
        icon: <FaLinkedin className="size-4" />
    },
    {
        name: "X (Twitter)",
        link: "https://x.com/lonz_chris",
        icon: <FaXTwitter className="size-4" />
    }
    // TODO: Add more socials here
]

export const Profile = () => {
    return (
        <Card>
            <CardContent className="pt-6">
                <div className="flex flex-col items-start gap-2 ">
                    <Image
                        width={150}
                        height={150}
                        quality={100}
                        alt="Avatar Icon"
                        src="/avatar.svg"
                        className="rounded-full border-2 mx-auto object-cover"
                    />
                    <h1 className="text-2xl mt-4 font-bold">Your Avatar</h1>
                    <p className="text-muted-foreground font-medium">
                        Solopreneur Developer
                    </p>
                    <p className="mt-2 text-start text-sm text-muted-foreground">
                        Web Engineer and Digital Strategist on a mission to help businesses
                        break free from ordinary websites and create digital experiences that drive growth.
                    </p>
                    <Button
                        asChild
                        className="mt-4 w-full"
                    >
                        {/* Enter your email to get in touch */}
                        {/* Or use Calendly or Cal to schedule a call */}
                        <Link
                            target="_blank"
                            className="font-semibold"
                            href="https://cal.com/chris-alonzo-u7ilrx/free-consultation-with-chris"
                        >
                            CONTACT ME
                        </Link>
                    </Button>
                    {/* Social Links */}
                    <div className="mt-4 flex flex-col space-y-2 border-t border-border pt-4 w-full">
                        {socials.map((s, i) => {
                            const parts = s.link.split("/");
                            const username = parts[parts.length - 1];
                            return (
                                <Link
                                    key={i}
                                    href={s.link}
                                    target="_blank"
                                    aria-label={s.name}
                                    className="cursor-pointer flex items-center gap-2 group"
                                >
                                    {s.icon}
                                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-color duration-200 ease-linear">
                                        /{username}
                                    </p>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}