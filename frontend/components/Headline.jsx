export default function Headline({ title = "Заголовок" }) {
  return <h2 className="text-4xl lg:text-5xl text-gray-800">{title}</h2>;
}
