'use client'
import React, { useMemo } from "react";
import Image from 'next/image'
import styles from './page.module.css'
import type { NextPage } from "next";
import { netHomeData } from "@/server/home";
import Link from "next/link";

interface IProps {}

const Home: NextPage<IProps> = () => {

  const SendMessage = async () => {
    console.log('1212121')
    const a = await netHomeData();
    console.log(a);
  }
  return (
    <main className={styles.main}>
      <div  onClick={SendMessage}>
        Send Message
      </div>
      <Link href={'/test'} >
        test
      </Link>
    </main>
  )
}

export default Home;
