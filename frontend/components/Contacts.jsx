import { forwardRef } from "react";
import Image from "next/image";
import { RiMapPinLine } from "react-icons/ri";
import { urlFor } from "@/utils/sanity";
import Container from "@/components/Container";
import { ContactButton } from "@/components/Buttons";

const Contacts = forwardRef(({ contacts }, ref) => {
  return (
    <div className="bg-gray-200">
      <Container>
        <div className="flex flex-col py-8 space-y-4 md:items-center lg:flex-row lg:space-y-0">
          <ul className="flex-1 space-y-2">
            {contacts.phones.map((phone) => (
              <li
                key={phone._key}
                className="flex items-center justify-center lg:justify-start space-x-2"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={urlFor(phone.icon).width(28).url()}
                  width="28"
                  height="28"
                  alt={phone.icon.alt}
                />
                <a href={`tel:${phone.number}`}>{phone.number}</a>
              </li>
            ))}
          </ul>
          <div className="space-y-4">
            <ContactButton ref={ref} />
          </div>
          <ul className="flex-1 text-center space-y-1 lg:text-right">
            <li>
              {contacts.city}, {contacts.address1}, {contacts.address2}
            </li>
            <li className="inline-block">
              <a
                href={contacts.mapLink}
                className="flex items-center space-x-2"
              >
                <RiMapPinLine />
                <span>Дивитись на мапі</span>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
});

Contacts.displayName = "Contacts";

export default Contacts;
