import Service from "@/components/Service";

export default function ServiceList({ services }) {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <Service key={service._id} service={service} />
      ))}
    </div>
  );
}
