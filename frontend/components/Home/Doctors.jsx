import Image from "next/image";
import { urlFor, PortableText } from "@/utils/sanity";
import Headline from "@/components/Headline";
import Tile from "@/components/Tile";
import Button from "@/components/Buttons";

export default function Doctors({ doctors }) {
  return (
    <section className="space-y-8">
      <Headline title={doctors.title} />
      <Tile className="flex flex-col-reverse space-y-4 space-y-reverse lg:flex-row">
        <div className="flex-1 space-y-6 lg:p-8">
          <div className="prose max-w-none">
            <PortableText value={doctors.description} />
          </div>
          <Button href={`/${doctors.href}`}>Докладніше про команду</Button>
        </div>
        <div className="relative h-72 w-full md:h-96 lg:h-auto lg:w-5/12">
          <Image
            src={urlFor(doctors.image).width(1200).url()}
            className="rounded-2xl bg-gray-100 object-cover"
            alt={doctors.image.alt}
            fill
          />
        </div>
      </Tile>
    </section>
  );
}
