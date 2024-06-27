import { NextSeo } from "next-seo";
import { getClient } from "@/utils/sanity";
import { PortableText } from "@/utils/sanity";
import Header from "@/components/Header";
import Headline from "@/components/Headline";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Subscribe from "@/components/Subscribe";

import { thanksQuery } from "@/queries/thanks";

export default function Thanks({ data }) {
  const { menu, contacts, meta, title, page } = data;
  return (
    <>
      <NextSeo
        title={meta.title}
        description={meta.description}
        noindex={true}
      />
      <Header navItems={menu} contacts={contacts} />
      <Main>
        <section className="space-y-8 pb-12 text-center">
          <Headline title={title} />
          <div className="prose max-w-none">
            <PortableText value={page.content} />
          </div>
        </section>
        <Subscribe />
      </Main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const data = await getClient().fetch(thanksQuery);

  return {
    props: { data },
    revalidate: 1,
  };
}
