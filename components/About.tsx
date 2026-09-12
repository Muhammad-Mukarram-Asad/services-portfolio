import { Reveal } from "@/components/Reveal";
import styles from "./About.module.css";

export function About() {
  return (
    <Reveal as="section" className={styles.section}>
      <h2>About me / Why work with me</h2>
      <div className={styles.copy}>
        <p>
          I am the engineer you bring in when the design is approved and the product still
          has to work for real users. I build and harden frontend-heavy products in React
          and Next.js — clean components, live data, and interfaces that stay precise under
          production traffic. I also work in Python when the backend needs a capable pair of
          hands.
        </p>
        <p>
          My strongest proof is <b>Hysab Kytab PFM</b>, a personal finance layer embedded in
          bank apps. Customers see live transaction history, spending insights, budgets, and
          saving goals. I built across accounts, insights, budgets, and saving goals in React
          and Next.js. I also built the frontend for <b>Omni Vision</b>, a real-time
          computer-vision monitoring dashboard — live alerts, camera scenarios, and
          operational charts.
        </p>
        <p>
          Startups get speed. Banks get care. Corporate teams get someone who can join an
          existing codebase, ship the next slice, and leave it cleaner than they found it.
        </p>
      </div>
    </Reveal>
  );
}
