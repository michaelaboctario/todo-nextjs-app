'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Container from "@/_components/container";
import AddTask from "@/_components/addtask";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Container >
        <h1>
          To do list&nbsp;
        </h1>
        <AddTask />
        </Container>               
      </div>
    </main>
  );
}
