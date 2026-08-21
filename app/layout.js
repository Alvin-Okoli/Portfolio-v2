import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  // TODO: Replace this with Alvin's actual portfolio domain
  metadataBase: new URL("https://YOUR-DOMAIN.com"),

  title: {
    default: "Alvin Okoli | Principal Product Designer",
    template: "%s | Alvin Okoli",
  },

  description:
    "Portfolio of Alvin Okoli — Principal Product Designer based in Denver with 12 years of experience designing web and iOS products, currently focused on web3.",

  keywords: [
    "Alvin Okoli",
    "Principal Product Designer",
    "Product Designer",
    "UI Designer",
    "UX Designer",
    "UI/UX Designer",
    "Web Product Designer",
    "iOS Product Designer",
    "Web3 Designer",
    "Product Design Portfolio",
    "Denver Product Designer",

    // TODO: Add Alvin's other specialties/skills here
    // Example: "Design Systems", "Figma", "SaaS Product Design"
  ],

  authors: [
    {
      name: "Alvin Okoli",

      // TODO: Replace with Alvin's actual portfolio domain
      url: "https://YOUR-DOMAIN.com",
    },
  ],

  creator: "Alvin Okoli",
  publisher: "Alvin Okoli",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Alvin Okoli | Principal Product Designer",

    description:
      "Principal Product Designer based in Denver specializing in web and iOS products, with 12 years of design experience.",

    // TODO: Replace with Alvin's actual portfolio domain
    url: "https://YOUR-DOMAIN.com",

    siteName: "Alvin Okoli Portfolio",

    images: [
      {
        // TODO:
        // Add a 1200x630 social preview image to:
        // public/og-image.png
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alvin Okoli - Principal Product Designer",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Alvin Okoli | Principal Product Designer",

    description:
      "Portfolio of Alvin Okoli — Principal Product Designer specializing in web, iOS, and web3 products.",

    // TODO:
    // Add the social preview image to:
    // public/og-image.png
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        // TODO: Replace YOUR-DOMAIN.com with Alvin's actual portfolio domain
        "@id": "https://YOUR-DOMAIN.com/#person",

        name: "Alvin Okoli",

        // TODO: Replace with Alvin's actual portfolio URL
        url: "https://YOUR-DOMAIN.com/",

        // TODO: Replace with the actual OG/profile image URL if different
        image: "https://YOUR-DOMAIN.com/og-image.png",

        jobTitle: "Principal Product Designer",

        description:
          "Principal Product Designer based in Denver with 12 years of experience specializing in web and iOS apps, currently focused on building the future of web3.",

        sameAs: [
          // TODO: Add Alvin's actual social profile URLs
          "https://github.com/YOUR-USERNAME",
          "https://www.linkedin.com/in/YOUR-USERNAME/",
          "https://x.com/YOUR-USERNAME",
        ],

        knowsAbout: [
          "Product Design",
          "UI Design",
          "UX Design",
          "Web Design",
          "iOS Design",
          "Web Applications",
          "iOS Applications",
          "Web3",
          "User Experience",
          "User Interface Design",

          // TODO: Add Alvin's other specialties here
        ],
      },

      {
        "@type": "WebSite",

        // TODO: Replace YOUR-DOMAIN.com with Alvin's actual portfolio domain
        "@id": "https://YOUR-DOMAIN.com/#website",

        // TODO: Replace with Alvin's actual portfolio URL
        url: "https://YOUR-DOMAIN.com",

        name: "Alvin Okoli | Principal Product Designer",

        description:
          "Portfolio website of Alvin Okoli, a Principal Product Designer based in Denver specializing in web and iOS products and currently focused on web3.",

        publisher: {
          // Keep this exactly aligned with the Person @id above
          "@id": "https://YOUR-DOMAIN.com/#person",
        },
      },
    ],
  };
  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="your-security-token-here"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col selection:bg-black/50 selection:text-white">
        {children}
      </body>
    </html>
  );
}
