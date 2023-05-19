import { ClientConfig } from '@/client.config'
import { isIos } from "@/utils/ownOs";
import { ipReg } from "@/utils/other";
import { ILogParams } from "@/typings/hive.interfaces";

// 大数据打点
export const netHiveLog = (logData: ILogParams) => {
  fetch(ClientConfig.netUrl.hive + `?json=${encodeURIComponent(JSON.stringify(logData))}`, {
    method: "GET",
    keepalive: true
  }).catch(error => console.log('Error:', error))
}

// 获取Ip
export const netIP = async () => {
  let resIp = sessionStorage.getItem('DEVICE_IP') || '';
  try {
    if (!resIp) {
      const response = await fetch(ClientConfig.netUrl.ip, { method: "get", keepalive: true });
      const res = await response.json();
      const _resIp = res?.data ? res.data.toString().replace("\n", "") : '';
      if (_resIp && ipReg.test(_resIp)) {
        resIp = _resIp;
        sessionStorage.setItem('DEVICE_IP', _resIp);
      }
    }
    return resIp
  } catch (e) {
    console.log('Error IP:', e)
    return resIp
  }
}

// IPUA
export const netIPUA = (copyText: string) => {
  const ua = window.navigator.userAgent;
  fetch(ClientConfig.netUrl.ipua, {
    method: 'post',
    body: JSON.stringify({
      clipboard: copyText,
      ua, pname: isIos(ua) ? ClientConfig.ios.pname : ClientConfig.android.pname
    }),
    headers: {
      'Content-Type': 'application/json'
    },
    keepalive: true,
  }).then(() => {}).catch(() => {});
}
