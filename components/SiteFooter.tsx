import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <span><b>“Quality is never an accident; it is always the result of intelligent effort.”</b> – <i>John Ruskin</i></span>
      <span className={styles.copyright}>© 2026 Muhammad Mukarram Asad</span>
    </footer>
  );
}
