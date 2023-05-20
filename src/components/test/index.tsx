"use client"
import React, { FC, useEffect } from "react";
import { netHomeData } from "@/server/home";
import Link from "next/link";
// import sensors from "sa-sdk-javascript";
interface IProps {}

const TestCom: FC<IProps> = () => {

  useEffect(() => {
    console.log('test page component')
  }, []);


  const SendMessage = async () => {
    // sensors.track('$WebClick', { test: 121212 })
  }
  return (<main>
    <Link href={'/'} >
      page
    </Link>
    <button onClick={SendMessage}>
      test Send Message12121212
    </button>
  </main>
  )
}

export default TestCom;
