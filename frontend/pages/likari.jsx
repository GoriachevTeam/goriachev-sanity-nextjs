import { NextSeo } from "next-seo";
import { urlFor, PortableText } from "@/utils/sanity";
import { getClient } from "@/utils/sanity";
import Image from "next/image";
import Header from "@/components/Header";
import Headline from "@/components/Headline";
import Footer from "@/components/Footer";
import Tile from "@/components/Tile";
import Main from "@/components/Main";

import { doctorsQuery } from "@/queries/doctors";

export default function DoctorsPage({ data }) {
  const { menu, contacts, meta, doctors, title } = data;
  return (
    <>
      <NextSeo title={meta.title} description={meta.description} />
      <Header navItems={menu} contacts={contacts} />
      <Main>
        <section className="space-y-8">
          <Headline title={title} />
          {doctors.map((doctor) => (
            <Tile
              key={doctor._id}
              className="flex flex-col space-y-4 space-y lg:flex-row lg:space-x-8"
            >
              <div className="lg:w-1/3 xl:w-auto">
                <Image
                  src={urlFor(doctor.image).width(800).height(800).url()}
                  width="400"
                  height="400"
                  className="rounded-2xl bg-gray-100"
                  alt={doctor.image.alt}
                />
              </div>
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl lg:text-3xl pb-2">
                  {doctor.name}
                </h2>
                <p className="font-semibold text-deep-cove-400 pb-2">
                  {doctor.specialty}
                </p>
                <div className="prose max-w-none">
                  <PortableText value={doctor.bio} />
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
  const data = await getClient().fetch(doctorsQuery);

  return {
    props: { data },
    revalidate: 1,
  };
}
