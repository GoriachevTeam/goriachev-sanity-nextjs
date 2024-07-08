import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="uk">
        <Head>
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <meta
            name="facebook-domain-verification"
            content="xw8jvw234zimj6qlplgib7xsv6luyq"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
