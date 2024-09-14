import { useContext, useEffect, useState } from "react";
import BeforeAfter from "../../Components/Templates/First-Page/BeforeAfter";
import Header from "../../Components/Templates/First-Page/Head";
import OurPatients from "../../Components/Templates/First-Page/OurPatients";
import ServiceCards from "../../Components/Templates/First-Page/ServiceCards";
import Services from "../../Components/Templates/First-Page/Services";
import { useTheme } from "next-themes";
import Me from "../../Components/Templates/First-Page/Me";
import Head from "next/head";
import { context } from "../../Components/Templates/context";

export default function Home({ country }) {
  const [showComponent, setShowComponent] = useState(false);

  const { theme } = useTheme();
  const { setCountry } = useContext(context);
  useEffect(() => {
    setCountry(country);
  }, [country]);
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
        <title>کلینیک زیبایی درمانی پوست و مو اصفهان</title>
        <meta
          name="description"
          content="کلینیک تخصصی پوست، مو و زیبایی در اصفهان ارائه‌دهنده خدمات بوتاکس، مزونیدلینگ، هایفوتراپی، تزریق فیلر، و جراحی‌های پوستی با کد نظام پزشکی معتبر دو متخصص پوست میباشد."
        />
        <meta
          property="og:title"
          content="کلینیک پوست، مو و زیبایی در اصفهان | بهترین خدمات زیبایی و درمانی"
        />
        <meta
          property="og:description"
          content="کلینیک تخصصی پوست، مو و زیبایی در اصفهان ارائه‌دهنده خدمات بوتاکس، مزونیدلینگ، هایفوتراپی، تزریق فیلر و جراحی‌های پوستی میباشد."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:image" content="https://yourwebsite.com/image.jpg" />
        <meta property="og:locale" content="fa_IR" />
        <meta
          property="og:site_name"
          content="کلینیک زیبایی درمانی پوست و مو اصفهان"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="کلینیک پوست، مو و زیبایی در اصفهان | بهترین خدمات زیبایی و درمانی"
        />
        <meta
          name="twitter:description"
          content="کلینیک تخصصی پوست، مو و زیبایی در اصفهان ارائه‌دهنده خدمات بوتاکس، مزونیدلینگ، هایفوتراپی، تزریق فیلر و جراحی‌های پوستی میباشد."
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/image.jpg"
        />
        <meta name="twitter:site" content="@yourclinic" />
      </Head>
      {showComponent && (
        <section className={theme === "dark" ? "bg-slate-900" : "bg-slate-100"}>
          <Header />
          <Services />
          {/*<BeforeAfter/> */}
          <ServiceCards />
          <Me />
          <OurPatients />
        </section>
      )}
    </>
  );
}
export async function getStaticProps() {
  try {
    const { ip } = await fetch("https://api.ipify.org/?format=json").then(
      (res) => res.json()
    );

    const { country } = await fetch(`https://api.country.is/${ip}`).then(
      (res) => res.json()
    );

    console.log(country);

    return { props: { country } };
  } catch (error) {
    console.error("Error in getStaticProps:", error);

    return { props: { country: "Unknown" } };
  }
}
