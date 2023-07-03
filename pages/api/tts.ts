import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${req.query.voice}/stream`, {
    'method': 'POST',
    'body': JSON.stringify({
      model_id: "eleven_monolingual_v1",
      text: req.query.text
    }),
    'headers': {
      'accept': '*/*',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'zh-CN,zh;q=0.9',
      // 'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImY5N2U3ZWVlY2YwMWM4MDhiZjRhYjkzOTczNDBiZmIyOTgyZTg0NzUiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoi5pyo5piT5YWs5a2QIiwicGljdHVyZSI6Imh0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS8yNjM1Njc5OT92PTQiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20veGktbGFicyIsImF1ZCI6InhpLWxhYnMiLCJhdXRoX3RpbWUiOjE2ODgxMjQ0MDksInVzZXJfaWQiOiJxaWg4UURyTkkzUk9CRUtJdkRqS3ZpZnBHcGYxIiwic3ViIjoicWloOFFEck5JM1JPQkVLSXZEakt2aWZwR3BmMSIsImlhdCI6MTY4ODE5MjIwMCwiZXhwIjoxNjg4MTk1ODAwLCJlbWFpbCI6IjM1MDkyNjYyM0BxcS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ2l0aHViLmNvbSI6WyIyNjM1Njc5OSJdLCJlbWFpbCI6WyIzNTA5MjY2MjNAcXEuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ2l0aHViLmNvbSJ9fQ.hGuY8c7Kg0OSXVbDbzPggxIOskvYNxCWN1UjdE0VgFs7-OZhAEyah1efir0TYGVmEfK9m7GNUDPASE4QbSf9Uc1grkIsjNwVOa-07crbaSpoDBvqpkr-2Al-0ruCh6L7RyOThM3Z0QgMe0i-gAJSpAzAahkFOSB34Wx1aXnseIcu8gxCfn9IuFA0Qr8LBhBAILeGuOmgwOgkLGDpo6fxhQj7oDz5xlae6NjTf6beF8g3_UCE6tcN9ZqC2ytPE5zlcznS3Lgx8zmZ32FT8f7Xf_xONEnq5d-tOMc5qacjgPPF7LkaSHa0RSdYpJTByAn5UdcWM51UURaRqhPjsLBzaA',
      'content-type': 'application/json',
      // 'origin': 'https://beta.elevenlabs.io',
      // 'referer': 'https://beta.elevenlabs.io/',
      // 'cache-control': 'no-cache',
      // 'pragma': 'no-cache',
      'sec-ch-ua': "Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114",
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
    },
    'referrer': 'https://beta.elevenlabs.io/',
    'referrerPolicy': 'strict-origin-when-cross-origin',
  })
  const data = await response.arrayBuffer();

  res.status(200)
    .json(data)
}
