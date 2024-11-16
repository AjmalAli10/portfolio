import Page from "./page"
import ServiceNavbar from "./_components/ServiceNavbar";
import ServiceContact from "./_components/ServiceContact";

const ServicesLayout = () => {
    return (
        <>
        <ServiceNavbar />
        <Page />
        <ServiceContact />
        </>
    );
}

export default ServicesLayout