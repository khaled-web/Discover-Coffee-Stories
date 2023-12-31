import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from '../pages/components/banner'


export default function Home(props) {
  const handleOnBannerBtnClick = ()=>{
    console.log('Hi banner button')
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel="icon" href="/favicon01.ico" />
        <meta
          name="description"
          content="allows you to discover coffee stores"
        />
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>Coffee Connoisseur</h1> */}
        <Banner buttonText="View stores nearby" handleClick={handleOnBannerBtnClick}/>
        <div className={styles.heroImage}>
        <Image src='/Static/hero-image.png' width={700} height={400}/>
        </div>
      </main>
    </div>
  );
}