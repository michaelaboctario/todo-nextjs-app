'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Container from "@/_components/container";
import ListTask from "@/_components/listtask";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Container >
        <p>
          To do list&nbsp;
        </p>
        <ListTask />
        </Container>               
      </div>
    </main>
  );
}
