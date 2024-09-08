import BeforeAfter from "../../Components/Templates/First-Page/BeforeAfter";
import Head from "../../Components/Templates/First-Page/Head";
import Services from "../../Components/Templates/First-Page/Services";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();

  return (
    <>
      <section className={theme === "dark" ? "bg-slate-900" : "bg-slate-100"}>
        <Head />
        <Services />
        <BeforeAfter />
      </section>
    </>
  );
}
