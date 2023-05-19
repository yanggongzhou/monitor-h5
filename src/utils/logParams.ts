import { randomString } from './other'
import { ClientConfig } from '@/client.config';
import { isAndroid, isIos, ownOs } from "@/utils/ownOs";
import { AnyObject, ILogParams } from "@/typings/hive.interfaces";

export const getUserLandId = () => {
  const userlandId = window.localStorage.getItem('USER_LANDPID');
  if (!userlandId) {
    const _id = randomString();
    window.localStorage.setItem('USER_LANDPID', _id);
    return _id
  }
  return userlandId;
}

/**
 * 获取大数据打点参数
 */
export const getLogParams = ({ event, clipboard, log_id, data = {} as AnyObject }): ILogParams => {
  const { channelCode, bid, h5fingerPrint, fingerPrintPversion, h5uid, ua } = clipboard;
  const _bookId = data?.bookId ?? bid;
  const date = new Date();
  return {
    bline: "ft",
    app_version: '3.1.1',
    imei: "",
    oaid: "",
    idfa: "",
    pline: isIos(ua) ? 'ios': (isAndroid(ua) ? 'android' : 'incompatible'),
    pkna: isIos(ua) ? ClientConfig.ios.pname : ClientConfig.android.pname,
    type: "luodiye",
    log_id, // 日志id 随机生成，16位字符串即可
    cts: date.getTime(), // 客户端时间，精确到毫秒
    chid: channelCode, // 渠道号
    uid: h5uid,
    event, // 事件名称
    data: {
      date: date.toLocaleDateString().replace(/\//g, '-'),
      type: ClientConfig.logDataType,
      action: 3, // 1 pv | 2 按钮点击下载
      clipboard: {
        ...clipboard,
        log_id,
      },
      bookId: _bookId,
      isPc: ownOs(ua).isPc ? 1 : 0,
      platform: navigator.platform,
      ua,
      h5fingerPrint,
      fingerPrintPversion,
      ...data,
    }
  }
}



