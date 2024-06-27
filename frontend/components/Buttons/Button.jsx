import Link from "next/link";

export default function Button({ children, href }) {
  return (
    <Link
      href={href}
      className="bg-deep-cove-500 hover:bg-deep-cove-400 rounded-md text-white font-semibold px-8 py-4 inline-block w-full text-center md:w-auto"
    >
      {children}
    </Link>
  );
}
