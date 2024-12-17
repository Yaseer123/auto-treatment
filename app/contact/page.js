export const metadata = {
    title: "Contact Us | Best Car Repair Shop in Bangladesh",
    description:
        "Get in touch with our expert team for car repairs, servicing, and maintenance. Visit us or call today for professional car care solutions in Bangladesh.",
    keywords:
        "contact car repair shop, car service contact Dhaka, car mechanics Bangladesh, car maintenance inquiry, auto repair appointment",
    openGraph: {
        title: "Contact Us | Best Car Repair Shop in Bangladesh",
        description:
            "Reach out to us for all your car repair and maintenance needs. Contact our expert mechanics and schedule an appointment today.",
        url: "https://www.yourcarrepairshop.com/contact",
        type: "website",
        images: [
            {
                url: "https://www.yourcarrepairshop.com/images/contact-us.jpg",
                width: 1200,
                height: 630,
                alt: "Contact Car Repair Shop",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Us | Best Car Repair Shop in Bangladesh",
        description:
            "Have questions or need car repair services? Contact us today and let our professional team assist you with your car care needs.",
        images: ["https://www.yourcarrepairshop.com/images/contact-us.jpg"],
    },
};

import ContactSection from "@/components/contact/ContactForm";
import ContactHeader from "@/components/contact/ContactHeader";

export default function Contact() {
    return (
        <>
            <ContactHeader />
            <ContactSection />
        </>
    );
}
