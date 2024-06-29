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
