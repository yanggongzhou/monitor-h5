const ClientConfig1 = {
  name: "小說大全",
  productName: "xsdq",
  companyName: "DIANZHONG TECHNOLOGY CO. LTD.",
  AllRightReserved: "© 小說大全, ALL RIGHT RESERVED",
  googleCode: "G-0GCD7R857D",
  email: "support@xsdqnovel.com",
  ios: {
    /** 小说大全的ios已下架，故商店链接、通用链接改为使用ios小说阅读吧的临时代替 */
    pname: "com.xsydbfcp.jxbxiaoshuoyueduba",
    deeplink: "https://api.kwread.com/open?clipboard=",
    link: "https://apps.apple.com/tw/app/id1512539334?mt=8",
    // link: "https://apps.apple.com/us/app/id1478104721",
    // pname: "com.yjtx.xiaoshuodaquan",
    channelCode: "FDQISEO1000000",
  },
  android: {
    link: "https://play.google.com/store/apps/details?id=com.dz.xsdq",
    pname: "com.dz.xsdq",
    channelCode: "FDQASEO1000001",
  },
  adjustObj: {
    bookId: process.env.environment === 'test' ? "11000000055" : "11010130566",
    // bookId: "11010130566",
    token: "d25yw4",
    cid: 0,
  },
  logDataType: "ssr_xsdq",
}
const ClientConfig2 = {
  name: "小說快讀",
  productName: "xskd",
  companyName: "BEIJING YUEJIANTIANXIA TECHNOLOGY CO. LTD.",
  AllRightReserved: "© 小說快讀, ALL RIGHT RESERVED",
  googleCode: "G-SRKT16WLGP",
  email: "support@xsdqnovel.com",
  ios: {
    pname: "com.zqzol.quanbenxiaoshuo",
    link: "https://apps.apple.com/tw/app/id1450779570",
    channelCode: "FKDISEO1000000",
  },
  android: {
    pname: "com.yj.xskd",
    link: "https://play.google.com/store/apps/details?id=com.yj.xskd",
    channelCode: "FKDASEO1000000",
  },
  adjustObj: {
    bookId: process.env.environment === 'test' ? "11000000055" : "11010130566",
    token: "d25yw4",
    cid: 0,
  },
  logDataType: "ssr_xskd",
}
const ClientConfig3 = {
  name: "小說閱讀吧",
  productName: "xsydb",
  companyName: "天津每日趣閱網絡技術有限公司",
  AllRightReserved: "© 小說閱讀吧, 版權所有",
  googleCode: "G-06FMH9S919",
  email: "support@xsdqnovel.com",
  ios: {
    pname: "com.xsydbfcp.jxbxiaoshuoyueduba",
    deeplink: "https://api.kwread.com/open?clipboard=",
    link: "https://apps.apple.com/tw/app/id1512539334?mt=8",
    channelCode: "FIYSEO1000000",
  },
  android: {
    pname: "com.book.rmxs",
    link: "https://play.google.com/store/apps/details?id=com.book.rmxs",
    channelCode: "FAYSEO1000000",
  },
  adjustObj: {
    bookId: "11010130566",
    token: "d25yw4",
    cid: 0,
  },
  logDataType: "ssr_xsydb",
}

const platformClient = {
  xsdq: ClientConfig1,
  xskd: ClientConfig2,
  xsydb: ClientConfig3,
}

export const ClientConfig = {
  ...platformClient['xsdq'],
  clientId: "ftb_",
  netUrl: {
    ip: "/asg/remote.do",
    hive: "https://log.klynf.com/h5_stand_final_log.php",
    ipua: "/asg/cacheua.do",
  }
};
