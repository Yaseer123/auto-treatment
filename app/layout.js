import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "../components/header/NavigationBar";
import TopBar from "../components/header/TopBar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
export const metadata = {
    title: "Best Car Repair Shop in Bangladesh | Professional Auto Services",
    description:
        "Experience top-quality car repair, maintenance, and auto services in Bangladesh. Our expert mechanics ensure your vehicle stays in perfect condition.",
    keywords:
        "car repair Bangladesh, auto maintenance Dhaka, professional car servicing, car workshop, vehicle diagnostics, engine repair, car mechanics",
    openGraph: {
        title: "Best Car Repair Shop in Bangladesh | Professional Auto Services",
        description:
            "We provide exceptional car repair and maintenance services across Bangladesh. Book an appointment with our expert mechanics today!",
        url: "https://www.yourcarrepairshop.com",
        type: "website",
        images: [
            {
                url: "https://www.yourcarrepairshop.com/images/car-repair-shop.jpg",
                width: 1200,
                height: 630,
                alt: "Car Repair Shop",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Best Car Repair Shop in Bangladesh | Professional Auto Services",
        description:
            "Reliable car repair and maintenance services by professional mechanics. Book an appointment for top-quality auto care in Bangladesh.",
        images: [
            "https://www.yourcarrepairshop.com/images/car-repair-shop.jpg",
        ],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="/css/style.css" />
            </head>
            <body>
                <TopBar />
                <NavigationBar />
                {children}
                <Analytics />
                <Footer />
            </body>
        </html>
    );
}
