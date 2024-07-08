import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-9ZXQHDCFFN"
        strategy="lazyOnload"
      />
      <Script id="ga-script" strategy="lazyOnload">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9ZXQHDCFFN');
        `}
      </Script>
      <Script id="gtm-script" strategy="lazyOnload">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PJP5KZTX');
        `}
      </Script>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PJP5KZTX"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden", height: 0, width: 0 }}
        ></iframe>
      </noscript>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
