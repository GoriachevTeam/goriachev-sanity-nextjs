import Image from "next/image";
import Link from "next/link";

export default function Service({ service }) {
  return (
    <div className="bg-white p-6 rounded-md shadow-fancy">
      <Link href={`/posluhy/${service.slug}`}>
        <div className="bg-gray-100 rounded-full p-1 inline-block leading-0">
          <Image src={service.icon} alt={service.name} width="52" height="52" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 pb-2">
          {service.name}
        </h3>
        <p>{service.summary}</p>
      </Link>
    </div>
  );
}
