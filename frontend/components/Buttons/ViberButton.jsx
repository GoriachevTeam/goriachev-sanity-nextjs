import { SiViber } from "react-icons/si";

export default function ViberButton({ className = "" }) {
  return (
    <a
      href="viber://chat/?number=%2B380667900090"
      className={`flex space-x-2 justify-center items-center ${className}`}
    >
      <span className="bg-viber rounded-full text-white p-2">
        <SiViber size="1.5rem" />
      </span>
    </a>
  );
}
