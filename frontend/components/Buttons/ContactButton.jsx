import { forwardRef } from "react";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfKuDzxtVpAmGVrv5Vcp4bE51LJRfYg3Tn8l9O0IK_EWRrDEQ/viewform?usp=sf_link";

const ContactButton = forwardRef(({ className, isSmall = false }, ref) => {
  return (
    <a
      ref={ref}
      href={FORM_URL}
      target="_blank"
      rel="noreferrer"
      className={`bg-picton-blue-500 items-center justify-center hover:bg-picton-blue-400 rounded-md text-deep-cove-500 font-semibold w-full inline-flex whitespace-nowrap ${className} ${
        isSmall ? "px-4 py-2" : "px-8 py-4"
      }`}
    >
      Записатися на прийом
    </a>
  );
});

ContactButton.displayName = "ContactButton";

export default ContactButton;
