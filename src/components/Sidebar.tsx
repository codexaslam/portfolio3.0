import Link from "next/link";
import Image from "next/image";

import {
    Card,
    CardContent
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const social = [
    {
        name: "Github",
        link: "https://github.com/achris-alonzo30",
        icon: 
    }
]

export const Sidebar = () => {
    return (
        <aside className="md:col-span-1">

            {/* Profile Section */}
            <Card>
                <CardContent className="pt-6">
                    <div className="flex flex-col items-start gap-2 ">
                        <Image
                            width={100}
                            height={100}
                            quality={100}
                            alt="profile"
                            src="/images/profile.jpg"
                            className="rounded-full border-2 mx-auto object-cover"
                        />
                        <h1 className="text-2xl mt-4 font-bold">Chris Lonzo</h1>
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

                        </div>
                    </div>
                </CardContent>
            </Card>
            {/* Skills Section */}
        </aside>
    )
}