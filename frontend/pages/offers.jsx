import { NextSeo } from "next-seo";
import { getClient } from "@/utils/sanity";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

import { offersQuery } from "@/queries/page";

export default function OffersPage({ data }) {
  const { menu, contacts, meta } = data;
  return (
    <>
      <NextSeo title={meta.title} description={meta.description} />
      <Header navItems={menu} contacts={contacts} />
      <Container></Container>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const data = await getClient().fetch(offersQuery);

  return {
    props: { data },
    revalidate: 1,
  };
}
