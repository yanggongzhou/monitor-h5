import React from "react";
import type { Metadata, NextPage } from "next";
import TestCom from "@/components/test";
import webficFavicon from "@/components/favicon/webfic";
interface IProps {}

export const metadata: Metadata = {
  title: 'WEBFIC',
  keywords: "edhqdqwhd",
  description: 'Generated by create next apwwwwwwwwwwwwp',
  icons: {  shortcut: { url: webficFavicon, type: 'image/x-icon' } }// favicon,
}

const Webfic: NextPage<IProps> = () => {
  return (
    <div>
      Webfic
    </div>
  )
}

export default Webfic;
