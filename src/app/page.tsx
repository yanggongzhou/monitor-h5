'use client'
import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

interface IProps {}

const Home: NextPage<IProps> = () => {
  return (<div>
    <Link href={'/tts'}>
      tts
    </Link>
  </div>)
}

export default Home;
