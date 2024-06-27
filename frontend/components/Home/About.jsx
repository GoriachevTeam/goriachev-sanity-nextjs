import Image from "next/image";
import { urlFor, PortableText } from "@/utils/sanity";
import Headline from "@/components/Headline";
import Tile from "@/components/Tile";
import Button from "@/components/Buttons";

export default function About({ about }) {
  return (
    <section className="space-y-8">
      <Headline title={about.title} />
      <Tile className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4">
        <div className="w-full h-72 relative md:h-96 lg:w-1/3 lg:h-auto">
          <Image
            src={urlFor(about.image).width(1200).url()}
            className="rounded-2xl object-cover bg-gray-100"
            alt={about.image.alt}
            fill
          />
        </div>
        <div className="space-y-6 lg:p-4 flex-1">
          <div className="prose max-w-none">
            <PortableText value={about.description} />
          </div>
          <Button href={`/${about.href}`}>Докладніше про центр</Button>
        </div>
      </Tile>
    </section>
  );
}
