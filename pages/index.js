import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from '../pages/components/banner'
import {useRouter} from 'next/router'
import Link from 'next/link'

export default function Home(props) {
  const handleOnBannerBtnClick = ()=>{
    console.log('Hi banner button')
  }
  const router = useRouter()
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
        <Link href='/dynamic-route'>
          The first touch for making dynamic route
        </Link>
      </main>
    </div>
  );
}