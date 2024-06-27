import Headline from "@/components/Headline";
import ServiceList from "@/components/ServiceList";
import Button from "@/components/Buttons";

export default function Services({ services, title, href }) {
  return (
    <section className="space-y-8">
      <Headline title={title} />
      <ServiceList services={services} />
      <div className="text-center">
        <Button href={`/${href}`}>Усі послуги</Button>
      </div>
    </section>
  );
}
