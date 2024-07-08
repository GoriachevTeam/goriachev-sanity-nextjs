import { NextSeo } from "next-seo";
import { getClient } from "@/utils/sanity";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Services from "@/components/Home/Services";
import About from "@/components/Home/About";
import Doctors from "@/components/Home/Doctors";
import Equipment from "@/components/Home/Equipment";

import { homeQuery } from "@/queries/home";

export default function HomePage({ data }) {
  const { meta, contacts, menu, services, about, doctors, equipment } = data;
  return (
    <>
      <NextSeo title={meta.title} description={meta.description} />
      <Header navItems={menu} contacts={contacts} />
      <Main className="space-y-16">
        <Services
          services={services.list}
          title={services.title}
          href={services.href}
        />
        <About about={about} />
        <Doctors doctors={doctors} />
        <Equipment equipment={equipment} />
      </Main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const data = await getClient().fetch(homeQuery);

  return {
    props: { data },
    revalidate: 1,
  };
}
