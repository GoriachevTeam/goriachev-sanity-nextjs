import { NumericFormat } from "react-number-format";

export default function Price({ price, price2, discountPrice }) {
  if (!price) {
    return <div className="font-medium text-picton-blue-800">-</div>;
  }

  if (price2) {
    return (
      <div className="font-medium text-picton-blue-800">
        <NumericFormat
          value={price}
          displayType="text"
          thousandSeparator={" "}
          prefix={"₴ "}
        />{" "}
        /{" "}
        <NumericFormat
          value={price2}
          displayType={"text"}
          thousandSeparator={" "}
          prefix={"₴ "}
        />
      </div>
    );
  }

  if (discountPrice) {
    return (
      <div className="font-medium">
        <NumericFormat
          className="line-through opacity-60 font-normal"
          value={price}
          displayType={"text"}
          thousandSeparator={" "}
          prefix={"₴ "}
        />
        <NumericFormat
          className="block text-picton-blue-800"
          value={discountPrice}
          displayType={"text"}
          thousandSeparator={" "}
          prefix={"₴ "}
        />
      </div>
    );
  }

  return (
    <div className="font-medium text-picton-blue-800">
      <NumericFormat
        value={price}
        displayType={"text"}
        thousandSeparator={" "}
        prefix={"₴ "}
      />
    </div>
  );
}
