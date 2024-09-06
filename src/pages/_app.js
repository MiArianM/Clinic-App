import "@/styles/reset.css";
import "@/styles/globals.css";
import Head from "next/head";
import Navbar from "../../Components/Templates/Nav-Bar/Nav";
import Footer from "../../Components/Templates/Footer/Footer";
import { ThemeProvider } from "next-themes";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider attribute="class">
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
