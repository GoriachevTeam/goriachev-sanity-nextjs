import { RiFacebookFill } from "react-icons/ri";

export default function FacebookButton({ className = "", isRound = false }) {
  const LINK =
    "https://www.facebook.com/%D0%9E%D1%84%D1%82%D0%B0%D0%BB%D1%8C%D0%BC%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%87%D0%BD%D0%B8%D0%B9-%D1%86%D0%B5%D0%BD%D1%82%D1%80-%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B0-%D0%93%D0%BE%D1%80%D1%8F%D1%87%D0%B5%D0%B2%D0%B0-106586541535572/";
  const style =
    "flex space-x-2 justify-center items-center text-white w-full md:w-auto bg-facebook";

  return (
    <a
      href={LINK}
      className={`${style} ${className} ${
        isRound ? "rounded-full p-2" : "rounded-xl p-4 text-lg"
      }`}
      aria-label="Сторінка Facebook"
    >
      <span className={`flex items-center space-x-1`}>
        <RiFacebookFill size="1.5rem" />
        {!isRound && <span className="pr-1">Facebook</span>}
      </span>
    </a>
  );
}
