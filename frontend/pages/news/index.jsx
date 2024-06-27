import { NextSeo } from "next-seo";
import { getClient } from "@/utils/sanity";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

import { newsQuery } from "@/queries/page";

export default function ServicesPage({ data }) {
  const { menu, contacts, meta, title } = data;
  return (
    <>
      <NextSeo title={meta.title} description={meta.description} />
      <Header navItems={menu} contacts={contacts} />
      <Container>
        <h1>{title}</h1>
      </Container>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const data = await getClient().fetch(newsQuery, { page: "news" });

  return {
    props: { data },
    revalidate: 1,
  };
}
