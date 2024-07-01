import CustomCarousel from "@/components/home/Carousel";
import ServiceBox from "@/components/home/ServiceBox";
import AboutComponent from "@/components/home/AboutComponent";
import FactComponent from "@/components/home/Fact";
import Service from "@/components/home/Service";
import BookingForm from "@/components/contact/BookingForm";
import Testimonials from "@/components/Testimonials";

export default function Home() {
    return (
        <>
            <CustomCarousel />
            <ServiceBox />
            <AboutComponent />
            <FactComponent />
            <Service />
            <BookingForm />
            {/* <OurTechnicians /> */}
            <Testimonials />
        </>
    );
}
