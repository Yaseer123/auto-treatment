export const metadata = {
    title: "Our Services | Professional Car Repair Shop in Bangladesh",
    description:
        "Explore our range of car repair, maintenance, and servicing solutions. From engine diagnostics to routine checkups, we ensure top-quality service for your vehicle.",
    keywords:
        "car repair services, car maintenance Bangladesh, auto repair shop, vehicle diagnostics, car servicing Dhaka, car workshop services",
    openGraph: {
        title: "Our Services | Professional Car Repair Shop in Bangladesh",
        description:
            "We offer a wide range of car repair and maintenance services. Book an appointment today to experience professional auto care.",
        url: "https://www.yourcarrepairshop.com/services",
        type: "website",
        images: [
            {
                url: "https://www.yourcarrepairshop.com/images/services.jpg",
                width: 1200,
                height: 630,
                alt: "Car Repair Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Services | Professional Car Repair Shop in Bangladesh",
        description:
            "Discover our comprehensive car repair services in Bangladesh. From diagnostics to full repairs, we take care of your vehicle.",
        images: ["https://www.yourcarrepairshop.com/images/services.jpg"],
    },
};

import BookingForm from "@/components/contact/BookingForm";
import Service from "@/components/home/Service";
import ServicesHeader from "@/components/services/ServiceHeader";
import Testimonials from "@/components/Testimonials";

export default function Services() {
    return (
        <>
            <ServicesHeader />
            <Service />
            <BookingForm />
            <Testimonials />
        </>
    );
}
