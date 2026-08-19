export interface RecaptchaRenderOptions {
  sitekey: string;
  size?: "invisible" | "normal" | "compact";
  callback?: (token: string) => void;
  "expired-callback"?: () => void;
  "error-callback"?: () => void;
}

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      render: (
        container: HTMLElement,
        options: RecaptchaRenderOptions,
      ) => number;
      execute: (widgetId?: number) => void;
      reset: (widgetId?: number) => void;
    };
  }
}

const rawSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY as
  | string
  | undefined;

export const RECAPTCHA_SITE_KEY =
  rawSiteKey && !rawSiteKey.startsWith("REPLACE_WITH_")
    ? rawSiteKey
    : undefined;
