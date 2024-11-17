import ServiceContact from "./_components/ServiceContact";
import ServiceNavbar from "./_components/ServiceNavbar";

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