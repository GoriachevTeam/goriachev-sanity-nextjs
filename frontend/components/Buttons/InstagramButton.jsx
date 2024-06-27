import { RiInstagramLine } from "react-icons/ri";

export default function InstagramButton({ className = "", isRound = false }) {
  const LINK = "https://www.instagram.com/goriachev_centr/";
  const style =
    "flex space-x-2 justify-center items-center text-white w-full md:w-auto";

  return (
    <a
      href={LINK}
      className={`${style} ${className} ${
        isRound
          ? "rounded-full p-2 instagram-radial"
          : "rounded-xl p-4 text-lg instagram-linear"
      }`}
      aria-label="Сторінка Instagram"
    >
      <span className={`flex items-center space-x-1`}>
        <RiInstagramLine size="1.5rem" />
        {!isRound && <span className="pr-1 drop-shadow">Instagram</span>}
      </span>
    </a>
  );
}
