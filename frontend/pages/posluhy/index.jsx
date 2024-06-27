import { NextSeo } from "next-seo";
import { getClient } from "@/utils/sanity";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Headline from "@/components/Headline";
import ServiceList from "@/components/ServiceList";

import { servicesQuery } from "@/queries/services";

export default function ServicesPage({ data }) {
  const { menu, contacts, meta, services, title } = data;
  return (
    <>
      <NextSeo title={meta.title} description={meta.description} />
      <Header navItems={menu} contacts={contacts} />
      <Main>
        <section className="space-y-8">
          <Headline title={title} />
          <ServiceList services={services} />
        </section>
      </Main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const data = await getClient().fetch(servicesQuery);

  return {
    props: { data },
    revalidate: 1,
  };
}
