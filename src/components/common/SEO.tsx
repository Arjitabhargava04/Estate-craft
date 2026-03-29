import type { ReactNode } from "react";
// Importing 'Helmet' - the tool that allows us to change the <head> of the HTML page
import { Helmet } from "react-helmet-async";
// Importing our project name so we can append it to every page title
import { PROJECT_NAME } from "../../utils/constants";

// Telling the computer what information we need to provide to use this SEO component
interface SEOProps {
    title: string;        // The title of the specific page (e.g., "Gallery")
    description?: string;  // A short summary for Google search results
    canonical?: string;    // The official URL link to this page
    ogType?: "website" | "article"; // Type of content for social media
    ogImage?: string;      // The image that shows up when you share the link on WhatsApp/FB
    children?: ReactNode;  // Any extra meta tags we might want to add manually
}

// Our main SEO component logic
const SEO = ({
    title,
    description = `Experience premium living with ${PROJECT_NAME}. Strategically located luxury flats in Pune with modern amenities.`,
    ogType = "website",
    ogImage = "/images/og-image.jpg",
    children,
}: SEOProps) => {
    // Creating a full title (e.g., "Contact Us | Abhay Apartments")
    const siteTitle = `${title} | ${PROJECT_NAME}`;

    return (
        <Helmet>
            {/* 1. Standard Tags: This is what you see in the browser tab and search results */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />

            {/* 2. Social Media Tags (Open Graph): Makes the link look pretty when shared */}
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={ogType} />
            <meta property="og:image" content={ogImage} />

            {/* 3. Twitter Specific Tags: So the site looks great on Twitter/X */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={siteTitle} />

            {/* Allowing other crawlers like Google to Index our site */}
            <meta name="robots" content="index, follow" />

            {/* Any extra content we pass in will be placed here */}
            {children}
        </Helmet>
    );
};

export default SEO;
