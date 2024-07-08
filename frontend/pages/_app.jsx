import Script from "next/script";
import { useEffect } from "react";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "pageview",
        page: window.location.pathname,
      });
    }
  }, []);
  return (
    <>
      <Script
        id="gtm-script"
        src="https://example.com/script.js"
        strategy="lazyOnload"
      />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PJP5KZTX"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
