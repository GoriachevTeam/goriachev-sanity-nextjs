import { useInView } from "react-intersection-observer";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Contacts from "@/components/Contacts";

export default function Header({ navItems, contacts }) {
  const { ref, inView } = useInView({
    threshold: 1,
  });
  return (
    <header>
      <Nav navItems={navItems} inView={inView} />
      <Hero />
      <Contacts contacts={contacts} ref={ref} />
    </header>
  );
}
