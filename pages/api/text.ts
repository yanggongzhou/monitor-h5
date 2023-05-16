import type { NextApiRequest, NextApiResponse } from 'next';
import { RecurrenceRule, scheduleJob } from 'node-schedule';

const _minute = 1;
const _second = 5;
// 定义规则
const scheduleRule = new RecurrenceRule();
scheduleRule.date = [1]; // 每月1号
scheduleRule.dayOfWeek = [1,2,3,4,5,6,7]; // 每周一、周三、周五
scheduleRule.hour = [0,12]; // 每天0点和12点开始推送
// [0,5,10,15,20,25,30,35,40,45,50,55]; // 每隔 5 分钟执行一次
scheduleRule.minute = Array.from({ length: 60 / _minute }, (v, i) => i * 5);
// 每分钟的0秒执行
scheduleRule.second = Array.from({ length: 60 / _second }, (v, i) => i * 5);
// 启动任务
// const scheduleJob = new scheduleJob(scheduleRule, () => {
//   console.log(new Date());
// })
// 取消任务
// scheduleJob.cancel();

type ResponseData = {
  name: string;
  scheduleRule: RecurrenceRule;
  ua?: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  // if (scheduleJob) {
  //   scheduleJob.cancel()
  // }

  // 启动任务
  const scheduleJob = new scheduleJob(scheduleRule, () => {
    console.log("new Date():", new Date());
  })

  return res.status(200).json({
    name: '启动任务',
    scheduleRule,
    ua: req.headers['user-agent']
  });
}
