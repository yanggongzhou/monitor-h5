"use client"
import React, { useEffect } from "react";
import { debounce } from "throttle-debounce";

const Template = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // initSensors()
  }, []);
  // 延时-等页面渲染完毕后再触发
  const initSensors = debounce(200, () => {
    const sensors = require('sa-sdk-javascript');
    sensors.init({
      server_url: "https://test-syg.datasink.sensorsdata.cn/sa?token=27f1e21b78daf376&project=lixiang", // 'https://sc-sa.dzfread.cn/sa?project=W_test',
      is_track_single_page: false, // !important
      name: 'Sensors',
      cross_subdomain: false, // 不同域名不同用户
      use_client_time: true,
      send_type:'ajax', // ajax beacon
      // heatmap: {}, // 全埋点
      show_log: true, // 设置 true 后会在网页控制台打 logger，会显示发送的数据,设置 false 表示不显示。
    })
    // 注册公共属性
    sensors.registerPage({
      url: location.href,
      // referrer: document.referrer
    });
    sensors.quick('isReady',function(){
      console.log('sensors=========presetProperties=========>', sensors.getPresetProperties());
    });
    sensors.track('$pageview', { name: '1212121212' })
  }, { atBegin: false })

  return <div data-name={'template'}>{children}</div>;
}

export default Template
