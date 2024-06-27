import { NextSeo } from "next-seo";
import { getClient } from "@/utils/sanity";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Headline from "@/components/Headline";
import PriceList from "@/components/PriceList";

import { pricesQuery } from "@/queries/prices";

export default function PricesPage({ data }) {
  const { menu, contacts, meta, typeOfService, title } = data;
  return (
    <>
      <NextSeo title={meta.title} description={meta.description} />
      <Header navItems={menu} contacts={contacts} />
      <Main>
        <Headline title={title} />
        {typeOfService.map((service) => (
          <section key={service._id} className="pt-12">
            <h2 className="text-3xl pb-4">{service.name}</h2>
            <PriceList services={service.services} />
          </section>
        ))}
      </Main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const data = await getClient().fetch(pricesQuery);

  return {
    props: { data },
    revalidate: 1,
  };
}
