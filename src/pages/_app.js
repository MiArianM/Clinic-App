import "@/styles/reset.css";
import "@/styles/globals.css";
import Head from "next/head";
import Navbar from "../../Components/Templates/Nav-Bar/Nav";
import Footer from "../../Components/Templates/Footer/Footer";
<<<<<<< HEAD
import { ThemeProvider } from "next-themes";
=======
>>>>>>> 219abd36599a1acddd9505b34939ae3db466a2e8
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
<<<<<<< HEAD
      <ThemeProvider attribute="class">
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
=======
      <Navbar />
      <Component {...pageProps} />
>>>>>>> 219abd36599a1acddd9505b34939ae3db466a2e8
      <footer>
        <Footer />
      </footer>
    </>
  );
}
