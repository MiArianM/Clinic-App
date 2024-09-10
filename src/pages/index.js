import { useEffect, useState } from "react";
import BeforeAfter from "../../Components/Templates/First-Page/BeforeAfter";
import Head from "../../Components/Templates/First-Page/Head";
import OurPatients from "../../Components/Templates/First-Page/OurPatients";
import ServiceCards from "../../Components/Templates/First-Page/ServiceCards";
import Services from "../../Components/Templates/First-Page/Services";
import { useTheme } from "next-themes";

export default function Home() {
  const [showComponent, setShowComponent] = useState(false);

  const { theme } = useTheme();
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowComponent(true);
    }, 20);

    return () => {
      clearTimeout(timer1);
    };
  }, []);
  return (
    <>
      {showComponent && (
        <section className={theme === "dark" ? "bg-slate-900" : "bg-slate-100"}>
          <Head />
          <Services />
          <BeforeAfter />
          <ServiceCards />
          <OurPatients />
        </section>
      )}
    </>
  );
}
