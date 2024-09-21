import "@/styles/reset.css";
import "@/styles/globals.css";
import Head from "next/head";
import Navbar from "../../Components/Templates/Nav-Bar/Nav";
import Footer from "../../Components/Templates/Footer/Footer";
import { ThemeProvider } from "next-themes";
import "animate.css";
import { useEffect, useState } from "react";
import { context } from "../../Components/Templates/context";
import Loader from "../../Components/Loader";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const [country, setCountry] = useState();
  const router = useRouter();
  const timeLimit = 2 * 60 * 60 * 1000;
  useEffect(() => {
    if (router.pathname === "/") {
      const firstVisitTime = localStorage.getItem("firstVisitTime");
      const currentTime = new Date().getTime();

      if (!firstVisitTime || currentTime - firstVisitTime > timeLimit) {
        setLoader(true);
        localStorage.setItem("firstVisitTime", currentTime);

        const loaderTimer = setTimeout(() => {
          setLoader(false);
        }, 5000);

        return () => {
          clearTimeout(loaderTimer);
        };
      }
    }
  }, [router.pathname]);

  return loader ? (
    <Loader />
  ) : (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="fa" />
        <link rel="canonical" href="https://yourwebsite.com" />
        <link rel="icon" href="/logo.png" sizes="any" />
      </Head>

      <ThemeProvider attribute="class">
        <context.Provider
          value={{ menuOpen, setMenuOpen, country, setCountry }}
        >
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </context.Provider>
      </ThemeProvider>
    </>
  );
}
