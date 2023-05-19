type Errors = string[]
declare var window: typeof Window & globalThis

interface Window {
  dataLayer: any
}
