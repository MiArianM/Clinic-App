import { useEffect, useState } from "react";
import BeforeAfter from "../../Components/Templates/First-Page/BeforeAfter";
import Header from "../../Components/Templates/First-Page/Head";
import OurPatients from "../../Components/Templates/First-Page/OurPatients";
import ServiceCards from "../../Components/Templates/First-Page/ServiceCards";
import Services from "../../Components/Templates/First-Page/Services";
import { useTheme } from "next-themes";
import Me from "../../Components/Templates/First-Page/Me";
import Head from "next/head";
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
      <Head>
        <title>کلینیک پوست مو زیبایی اصفهان</title>
      </Head>
      {showComponent && (
        <section className={theme === "dark" ? "bg-slate-900" : "bg-slate-100"}>
          <Header />
          <Services />
          <BeforeAfter />
          <ServiceCards />
          <Me />
          <OurPatients />
        </section>
      )}
    </>
  );
}
