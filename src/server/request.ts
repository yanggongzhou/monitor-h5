import axios, { AxiosResponse, AxiosError, CreateAxiosDefaults, Canceler } from 'axios'
import { createHmac } from 'crypto';

// 定义接口
interface PendingType {
  url?: string;
  method?: string;
  params: any;
  data: any;
  cancel: Canceler
}

// 取消重复请求
const pending: PendingType[] = [];
const CancelToken = axios.CancelToken;

const Service = axios.create({
  // baseURL: "/robot/send",
  params: {},
  timeout: 10 * 1000,
} as CreateAxiosDefaults);

// 添加请求拦截器
Service.interceptors.request.use(
  (request) => {
    const timestamp = new Date().getTime();
    const ACCESS_TOKEN = '7667bee5471210ebbbf0b201d20b82146b9d8a61d382315e6d6704c28d497e50';
    const SECRET = 'SEC1ef17a6e7f6a6ddd4ab98a98f3799b1295e7f0d077af19efdb5282f20c5d4182';
    const str = createHmac('sha256', SECRET).update(`${timestamp}\n${SECRET}`)
      .digest().toString('base64');
    const sign = encodeURIComponent(str);

    Reflect.set(request.params, 'access_token', ACCESS_TOKEN)
    Reflect.set(request.params, 'timestamp', timestamp)
    Reflect.set(request.params, 'sign', sign)
    request.cancelToken = new CancelToken((c: Canceler) => {
      const item = {
        url: request.url,
        method: request.method,
        params: request.params,
        data: request.data,
        cancel: c
      };
      const itemIndex = pending.findIndex(val => val.url === request.url);
      if (itemIndex !== -1) {
        pending[itemIndex].cancel();
        pending.splice(itemIndex, 1, item);
      } else {
        pending.push(item);
      }
    });
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
Service.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      return Promise.resolve(response.data)
      // if (response.data.status === 0) {
      //   return Promise.resolve(response.data)
      // }
      // return Promise.reject()
    }
    if (response.status === 404) {
      return Promise.reject()
    }
    return Promise.reject()
  },
  (err: AxiosError) => {
    if (err?.code === "ERR_CANCELED") return; // 请求取消
    console.error('err config url-------->', err.config);
    return Promise.reject()
  }
);

export default Service
