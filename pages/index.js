import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Nextjs Blog - Home</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <h1 className="p-6 text-3xl font-semibold tracking-tighter">Blog Nextjs </h1>
      <p className="px-6 pt-10 text-md font-light tracking-wider">Built dummy blog with NextJS, jsonplaceholder dummy content api, tailwindcss 3.0 for basic design</p>
    </>
  );
}
