import React from "react";
import type { Metadata, NextPage } from "next";
import { netHomeData } from "@/server/home";
import CeceCom from "@/app/test/ceee";
import DramaFavicon from "@/components/favicon/dramaBox";
interface IProps {}

export const metadata: Metadata = {
  title: 'Drama Box',
  keywords: "edhqdqwhd",
  description: 'Generated by create next apwwwwwwwwwwwwp',
  icons: {  shortcut: { url: DramaFavicon, type: 'image/x-icon' } }// favicon,
}

const V4Drama: NextPage<IProps> = () => {
  const SendMessage = async () => {
    console.log('1212121')
    const a = await netHomeData();
    console.log(a);
  }
  return (
    <>
      <CeceCom/>
    </>
  )
}

export default V4Drama;