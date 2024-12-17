export const metadata = {
    title: "About Us | Best Car Repair Shop in Bangladesh",
    description:
        "Welcome to our leading car repair shop in Bangladesh. We provide top-quality car repair, maintenance, and servicing with experienced professionals.",
    keywords:
        "car repair, auto service, vehicle maintenance, car workshop Bangladesh, car servicing Dhaka, professional car repair, car mechanics",
    openGraph: {
        title: "About Us | Best Car Repair Shop in Bangladesh",
        description:
            "Explore our reliable car repair services in Bangladesh. Professional auto repair solutions to keep your car in top condition.",
        url: "https://www.yourcarrepairshop.com/about",
        type: "website",
        images: [
            {
                url: "https://www.yourcarrepairshop.com/images/car-repair.jpg",
                width: 1200,
                height: 630,
                alt: "Car Repair Shop",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us | Best Car Repair Shop in Bangladesh",
        description:
            "We provide high-quality car repair, servicing, and maintenance in Bangladesh. Trusted auto experts to take care of your vehicle.",
        images: ["https://www.yourcarrepairshop.com/images/car-repair.jpg"],
    },
};

import AboutHeader from "@/components/AboutHeader";
import AboutComponent from "@/components/home/AboutComponent";
import FactComponent from "@/components/home/Fact";
import ServiceBox from "@/components/home/ServiceBox";

export default function About() {
    return (
        <>
            <AboutHeader />
            <ServiceBox />
            <AboutComponent />
            <FactComponent />
        </>
    );
}
