"use client"
import React, { useEffect } from "react";
import { debounce } from "throttle-debounce";

const Template = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    initSensors()
  }, []);
  // 延时-等页面渲染完毕后再触发
  const initSensors = debounce(200, () => {
    // 注册公共属性
    Sensors.registerPage({
      url: location.href,
      // referrer: document.referrer
    });
    Sensors.quick('isReady',function(){
      console.log('sensors=========presetProperties=========>', Sensors.getPresetProperties());
    });
    Sensors.track('$pageview', { name: '1212121212' })
  }, { atBegin: false })

  return <div data-name={'template'}>{children}</div>;
}

export default Template
