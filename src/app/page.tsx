import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        Home
        <Link href={"/about"}>Go to about</Link>
      </main>
    </div>
  );
}
