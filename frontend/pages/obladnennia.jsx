import Image from "next/image";
import { NextSeo } from "next-seo";
import { urlFor, PortableText } from "@/utils/sanity";
import { getClient } from "@/utils/sanity";
import Header from "@/components/Header";
import Headline from "@/components/Headline";
import Footer from "@/components/Footer";
import Tile from "@/components/Tile";
import Main from "@/components/Main";

import { equipmentQuery } from "@/queries/equipment";

export default function EquipmentPage({ data }) {
  const { menu, contacts, meta, equipment, title } = data;
  return (
    <>
      <NextSeo title={meta.title} description={meta.description} />
      <Header navItems={menu} contacts={contacts} />
      <Main>
        <section className="space-y-8">
          <Headline title={title} />
          {equipment.map((device) => (
            <Tile
              key={device._id}
              className="flex flex-col space-y-4 space-y lg:flex-row lg:space-x-8"
            >
              <div className="lg:w-1/3 xl:w-auto">
                <Image
                  src={urlFor(device.image).width(700).height(700).url()}
                  width="350"
                  height="350"
                  className="rounded-2xl bg-gray-100"
                  alt={device.image.alt}
                />
              </div>
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl lg:text-3xl">
                  {device.name}
                </h2>
                <p className="font-semibold text-deep-cove-400 pb-4">
                  {device.manufacturer} • {device.manufacturerCountry}
                </p>
                <div className="prose max-w-none">
                  <PortableText value={device.description} />
                </div>
              </div>
            </Tile>
          ))}
        </section>
      </Main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const data = await getClient().fetch(equipmentQuery);

  return {
    props: { data },
    revalidate: 1,
  };
}
