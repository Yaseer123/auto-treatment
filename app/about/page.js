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
