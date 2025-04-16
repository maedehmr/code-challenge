import Image from "next/image";
import styles from "./page.module.css";
import { CommentSection } from "./_components";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <Image src="/icons/comment.svg" width={24} height={24} alt="comment" />
        <h3>نظرات من</h3>
      </div>
      <CommentSection />
    </main>
  );
}
