import Service from "@/server/request";
import { Message, MessageType } from "@/server/index";

const textContent: Message.Text = {
  "msgtype": "text",
  "text": {
    "content": "【海外投放】告警\n" +
      "告警类型：MQ消息发送失败\n" +
      "项目名称：hwyc-push\n" +
      "主机名称：hwyc-log-02\n" +
      "告警数量：10\n" +
      "告警时间：2023-05-15T04:00:04\n" +
      "告警内容：[] MQ消息发送失败,CODE: 2  DESC: [TIMEOUT_CLEAN_QUEUE]broker busy, start flow control for a while, period in queue: 201ms, size of queue: 7\n" +
      "For more information, please visit the url, http://rocketmq.apache.org/docs/faq/\n" +
      "org.apache.rocketmq.client.exception.MQBrokerException: CODE: 2  DESC: [TIMEOUT_CLEAN"
  },
  // "at": {
  //   "atMobiles": [
  //     // "18612766370",
  //   ],
  //   "isAtAll": false
  // }
};

const link: Message.Link['link'] = {
  "text": "这个即将发布的新版本，创始人陈航（花名“无招”）称它为“红树林”。而在此之前，每当面临重大升级，产品经理们都会取一个应景的代号，这一次，为什么是“红树林”？",
  "title": "时代的火车向前开",
  "picUrl": "",
  "messageUrl": "https://mp.weixin.qq.com/s?__biz=MzA4NjMwMTA2Ng==&mid=2650316842&idx=1&sn=60da3ea2b29f1dcc43a7c8e4a7c97a16&scene=2&srcid=09189AnRJEdIiWVaKltFzNTw&from=timeline&isappinstalled=0&key=&ascene=2&uin=&devicetype=android-23&version=26031933&nettype=WIFI"
};

const card: Message.ActionCard['actionCard'] = {
  "title": "乔布斯 20 年前想打造一间苹果咖啡厅，而它正是 Apple Store 的前身",
  "text": `![screenshot](@lADOpwk3K80C0M0FoA)
              ### 乔布斯 20 年前想打造的苹果咖啡厅
              Apple Store 的设计正从原来满满的科技感走向生活化，而其生活化的走向其实可以追溯到 20 年前苹果一个建立咖啡馆的计划`,
  "hideAvatar": "0",
  "btnOrientation": "0",
  "btns": [
    {
      "title": "内容不错",
      "actionURL": "https://www.dingtalk.com/"
    },
    {
      "title": "不感兴趣",
      "actionURL": "https://www.dingtalk.com/"
    }
  ]
};

// 获取首页index
export const netHomeData = async () => {
  return await Service.post('/robot/send', textContent)
}
