import { NextSeo } from "next-seo";
import { PortableText, getClient } from "@/utils/sanity";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Headline from "@/components/Headline";
import Tile from "@/components/Tile";

import { aboutQuery } from "@/queries/about";

export default function AboutPage({ data }) {
  const { menu, contacts, meta, page, title } = data;
  return (
    <>
      <NextSeo title={meta.title} description={meta.description} />
      <Header navItems={menu} contacts={contacts} />
      <Main>
        <section className="space-y-8">
          <Headline title={title} />
          <Tile className="prose lg:prose-lg max-w-none">
            <PortableText value={page.content} />
          </Tile>
        </section>
      </Main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const data = await getClient().fetch(aboutQuery);

  return {
    props: { data },
    revalidate: 1,
  };
}
