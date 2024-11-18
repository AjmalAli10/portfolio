import ServiceContact from "./_components/ServiceContact";
import ServiceNavbar from "./_components/ServiceNavbar";
import { constructMetadata } from '@/lib/utils';


export const metadata = constructMetadata(
  {
    title: "Ajmal Ali | Innovative Digital Solutions | Freelancer | Digital Services",
    description: "Explore cutting-edge services that transform your ideas into impactful digital experiences, tailored to elevate your brand and engage your audience."
  }
)
export default function ServiceLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    return (
        <>
         <ServiceNavbar />
         {children}
         <ServiceContact />
        </>
    );
}