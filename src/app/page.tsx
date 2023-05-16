'use client'
import React, { useMemo } from "react";
import Image from 'next/image'
import styles from './page.module.css'
import type { NextPage } from "next";
import { netHomeData } from "@/server/home";
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
    </main>
  )
}

export default Home;
