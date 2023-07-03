'use client'
import React, { useState } from "react";
import styles from './page.module.css'
import type { NextPage } from "next";
import { Input, Select, Button } from 'antd';

const { TextArea } = Input;

interface IProps {}

const VoicesType = {
  Rachel: '21m00Tcm4TlvDq8ikWAM',
  Domi: 'AZnzlk1XvdvUeBnXmlld',
  Bella: 'EXAVITQu4vr4xnSDxMaL',
  Antoni: 'ErXwobaYiN019PkySvjV',
  Elli: "MF3mGyEYCl7XYWbV9V6O",
  Josh: 'TxGEqnHWrfWFTfGW9XjX',
  Arnold: 'VR6AewLTigWG4xSOukaG',
  Adam: "pNInz6obpgDQGcFmaJgB",
  Sam: 'yoZ06aMxZJJ28mfd3POQ'
};

const voices = [
  { "label": "Rachel", "value": "21m00Tcm4TlvDq8ikWAM" },
  { "label": "Domi", "value": "AZnzlk1XvdvUeBnXmlld" },
  { "label": "Bella", "value": "EXAVITQu4vr4xnSDxMaL" },
  { "label": "Antoni", "value": "ErXwobaYiN019PkySvjV" },
  { "label": "Elli", "value": "MF3mGyEYCl7XYWbV9V6O" },
  { "label": "Josh", "value": "TxGEqnHWrfWFTfGW9XjX" },
  { "label": "Arnold", "value": "VR6AewLTigWG4xSOukaG" },
  { "label": "Adam", "value": "pNInz6obpgDQGcFmaJgB" },
  { "label": "Sam", "value": "yoZ06aMxZJJ28mfd3POQ" }
];

const Home: NextPage<IProps> = () => {
  const [role, setRole] = useState(VoicesType.Domi);
  const [inputTxt, setInputTxt] = useState('');
  const getAudio = async (text: string) => {
    const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${role}/stream`, {
      method: 'POST',
      body: JSON.stringify({
        model_id: "eleven_monolingual_v1",
        text
      }),
      headers: {
        'content-type': 'application/json',
      }
    })
    const response = await res.blob();
    const url = URL.createObjectURL(response);
    const aDom = document.createElement('a');
    console.log(url)
    aDom.href = url;
    aDom.download = `${role}_${inputTxt.slice(0,5)}.mp3`;
    aDom.click();
    URL.revokeObjectURL(url);
  }

  const handleChange = (value: string) => {
    setRole(value)
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputTxt( e.target.value)
  };

  const download = () => {
    const arr = inputTxt.split('\n');
    arr.forEach(text => {
      if (text) {
        getAudio(text);
      }
    })
  }

  return (<div className={styles.ttsWrap}>
    <h3>TTS</h3>
    <p>支持多音频导出，每个段落一个音频</p>
    <div>
      <TextArea value={inputTxt} rows={20} onChange={onChange} />
      <br/>
      <Select
        value={role}
        style={{ width: 200, margin: '15px 10px 0 0' }}
        onChange={handleChange}
        options={[
          {
            label: 'Manager',
            options: voices,
          },
          {
            label: 'Engineer',
            options: [],
          },
        ]}
      />
      <Button onClick={() => download()}>下载</Button>
    </div>
  </div>)
}

export default Home;
