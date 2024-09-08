import "@/styles/reset.css";
import "@/styles/globals.css";
import Head from "next/head";
import Navbar from "../../Components/Templates/Nav-Bar/Nav";
import Footer from "../../Components/Templates/Footer/Footer";
import { ThemeProvider } from "next-themes";
import "animate.css";
import { useState } from "react";
import { context } from "../../Components/Templates/context";
export default function App({ Component, pageProps }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo.png" sizes="any" />
      </Head>
      <ThemeProvider attribute="class">
        <context.Provider value={{ menuOpen, setMenuOpen }}>
          <Navbar />
          <Component {...pageProps} />
        </context.Provider>
      </ThemeProvider>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
