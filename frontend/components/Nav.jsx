import { useState } from "react";
import Link from "next/link";
import { RiMenuLine, RiCloseFill } from "react-icons/ri";
import {
  ViberButton,
  InstagramButton,
  FacebookButton,
  ContactButton,
} from "@/components/Buttons";

export default function Nav({ navItems, inView }) {
  const [menu, setMenu] = useState(false);
  const handleClick = () => setMenu((menu) => !menu);

  return (
    <section className="fixed w-full bg-white z-40 shadow-lg top-0 px-4">
      <nav className="flex justify-between items-center w-full h-16">
        <ul
          className={`${
            menu ? "fixed top-16 fade-in p-4" : "hidden top-0"
          } flex-col space-y-4 inset-x-0 z-10 shadow-xl bg-deep-cove-500 lg:shadow-none lg:flex lg:flex-row lg:space-x-6 lg:space-y-0 lg:relative lg:bg-transparent font-medium`}
        >
          {navItems.map((item) => (
            <li key={item._id}>
              <Link
                href={item.href === "holovna" ? "/" : `/${item.href}`}
                className="text-white lg:text-deep-cove-500"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <button onClick={handleClick} className="block lg:hidden">
            {menu ? (
              <RiCloseFill size="1.5rem" />
            ) : (
              <RiMenuLine size="1.5rem" />
            )}
          </button>
        </div>
        <div className="flex space-x-4">
          {!inView && <ContactButton isSmall className="sm:block hidden" />}
          <ViberButton className="md:hidden" />
          <FacebookButton isRound />
          <InstagramButton isRound />
        </div>
      </nav>
      {!inView && (
        <div className="block sm:hidden pb-4">
          <ContactButton isSmall />
        </div>
      )}
    </section>
  );
}
