import { About } from "@/components/About";
import { CallToAction } from "@/components/CallToAction";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Proof } from "@/components/Proof";
import { Services } from "@/components/Services";
import { SiteFooter } from "@/components/SiteFooter";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.page}>
      <Hero />
      <Proof />
      <About />
      <Services />
      <Process />
      <CallToAction />
      <SiteFooter />
    </main>
  );
}
