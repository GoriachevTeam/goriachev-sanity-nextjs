import { useEffect } from "react";
import TagManager from "react-gtm-module";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "G-B23RN98LN3" });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
