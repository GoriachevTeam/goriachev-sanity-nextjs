import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { getClient, PortableText } from "@/utils/sanity";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Headline from "@/components/Headline";
import PriceList from "@/components/PriceList";
import Tile from "@/components/Tile";

import { serviceQuery, servicesSlugs } from "@/queries/services";

export default function ServicePage({ data = {} }) {
  const router = useRouter();

  const { name, description, services, menu, contacts, meta } = data;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <NextSeo title={meta.title} description={meta.description} />
      <Header navItems={menu} contacts={contacts} />
      <Main className="space-y-6">
        <Headline title={name} />
        {description && (
          <Tile>
            <div className="prose max-w-none">
              <PortableText value={description} />
            </div>
          </Tile>
        )}
        <h3 className="text-3xl pt-8">Ціни</h3>
        <PriceList services={services} />
      </Main>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const slugs = await getClient().fetch(servicesSlugs);

  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const param = {
    slug: params.slug,
  };

  const data = await getClient().fetch(serviceQuery, param);

  return {
    props: { data },
    revalidate: 1,
  };
}
