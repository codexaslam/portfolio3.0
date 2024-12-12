import { Metadata } from "next";

// TODO: Update metadata

export function constructMetadata({
  title = "Md Aslam Hossain", // TODO: Add a custom title
  description = "I'm a software engineer with 5+ years of experience specializing in technologies such as React.js, Next.js, Flutter, MongoDB, MySQL, Express.js, and Nest.js. Strong focus on functional programming, performance optimization, and scalable design. Experienced in cloud technologies like AWS, Docker, and Kubernetes for deploying robust applications", // TODO: Add a custom description
  image = "/thumbnail.png", // TODO: Add a custom image
  icons = "/logo.png", // TODO: Add a custom icon
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@dev_aslam",
    },
    icons,
    metadataBase: new URL("https://www.aslamhossain.live"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
