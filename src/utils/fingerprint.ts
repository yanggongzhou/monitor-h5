import Fingerprint2 from "fingerprintjs2"

export const InitFingerprint = (): Promise<string> => {
  const h5fingerPrint = window.localStorage.getItem('ft_seo_h5fingerprint');
  return new Promise((resolve) => {
    if (!h5fingerPrint || !h5fingerPrint.includes(process.env.Platform as string)) {
      Fingerprint2.get({ excludes: { enumerateDevices: true, deviceMemory: true, audio: true } }, function (components) {
        const values = components.map((component) => component.value);
        const murmur = process.env.Platform + '_' + Fingerprint2.x64hash128(values.join(""), 31);
        window.localStorage.setItem('ft_seo_h5fingerprint', murmur);
        resolve(murmur)
      });
    } else {
      resolve(h5fingerPrint)
    }
  })
}
