import Price from "@/components/Price";
import Tile from "@/components/Tile";

export default function PriceList({ services }) {
  return (
    <Tile>
      {services.map((item) => (
        <div
          key={item._key}
          className="flex space-x-4 even:bg-gray-100 p-2 rounded"
        >
          <div className="flex-1">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm opacity-80">{item.description}</p>
          </div>
          <Price
            price={item.price}
            price2={item.price2}
            discountPrice={item.discountPrice}
          />
        </div>
      ))}
    </Tile>
  );
}
