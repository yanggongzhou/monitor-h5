import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { netIP } from "@/server/clientLog";
import { compile, randomString } from "@/utils/other";
import { ClientConfig } from "@/client.config";
import { isIos } from "@/utils/ownOs";
import { getUserLandId } from "@/utils/logParams";
import { InitFingerprint } from "@/utils/fingerprint";
import { IHiveStore } from "@/store/store.interfaces";

export const clipboardAsync = createAsyncThunk(
  'hive/getClipboard',
  async () => {
    const ip = await netIP()
    const ua = navigator.userAgent;
    const h5fingerPrint = await InitFingerprint();
    const channelCode = isIos(ua) ? ClientConfig.ios.channelCode : ClientConfig.android.channelCode;
    return {
      ip: ip || '0.0.0.0',
      h5uid: getUserLandId(),
      channelCode,
      h5fingerPrint,
      ua,
      url: window.location.href,
    }
  }
)

export const hiveSlice = createSlice({
  name: 'hive',
  initialState: (): IHiveStore => {
    return {
      clipboard: {
        ip: "0.0.0.0",
        log_id: randomString(),
        h5uid: "",
        token: ClientConfig.adjustObj.token,
        bid: '',
        channelCode: '',
        cid: 0,
        shareCode: 0,
        url: process.env.WebDomain ?? '',
        ua: '',
        h5fingerPrint: "",
        fingerPrintPversion: 1,
      },
      copyText: '',
    }
  },
  reducers: {
    setClipboard: (state: IHiveStore, action: PayloadAction<{ bid?: string; cid?: string | number; log_id?: string;}>) => {
      const clipboardObj = Object.assign(state.clipboard, action.payload);
      state.copyText = ClientConfig.clientId + compile(clipboardObj);
    },
  },
  // 在extraReducers中可以对请求结果的成功失败，做不同的处理
  extraReducers: (builder) => {
    builder
      .addCase(clipboardAsync.fulfilled, (state, action) => {
        const clipboardObj = Object.assign(state.clipboard, action.payload);
        state.copyText = ClientConfig.clientId + compile(clipboardObj);
      })
    ;
  }
});

export const { setClipboard } = hiveSlice.actions;


export const hiveReducer = hiveSlice.reducer;
