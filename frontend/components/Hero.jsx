import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Hero() {
  const router = useRouter();
  return (
    <div className="bg-deep-cove-500 flex justify-center items-center p-16 mt-16">
      {router.pathname === "/" ? (
        <h1>
          <Image
            src="/logo.svg"
            alt="Офтальмологічний центр Дмитра Горячева"
            width={360}
            height={160}
          />
        </h1>
      ) : (
        <Link href="/">
          <h1>
            <Image
              src="/logo.svg"
              alt="Офтальмологічний центр Дмитра Горячева"
              width={360}
              height={160}
            />
          </h1>
        </Link>
      )}
    </div>
  );
}
