import { useLoaderData } from "react-router-dom";

const SingleItemDetails = () => {
  const itemDetails = useLoaderData();
  console.log(itemDetails.data);

  const {
    item_name,
    subcategory_name,
    short_description,
    price,
    rating,
    stock_status,
    processing_time,
    customization,
    image,
  } = itemDetails.data;

  // console.log( item_name,
  //     subcategory_name,
  //     short_description,
  //     price,
  //     rating,
  //     stock_status,
  //     processing_time,
  //     customization,
  //     image);

  return (
    <div>
      <div className="card flex lg:card-side  bg-lime-200 shadow-xl">
        <div className="p-4 flex rounded-xl">
          <figure>
            <img src={image} alt="Album" />
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title text-gray-700 text-2xl">
            Item Name: {item_name}
          </h2>
          <p className="text-gray-800 font-medium">
            Category: {subcategory_name}
          </p>
          <p className=" text-gray-600 font-semibold">
            Description: {short_description}
          </p>
          <p className="text-[20px] text-rose-700 font-bold">Price: {price}</p>
          <p className="text-[20px] text-green-600 font-bold">
            Rating: {rating}
          </p>
          <p className="text-[20px] text-gray-500 font-bold">
            Stock Status: {stock_status}
          </p>
          <p className="text-[20px] text-rose-800 font-bold">
            Time: {processing_time}
          </p>
          <p className="text-[20px] text-sky-500 font-medium">
            Customization: {customization}
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleItemDetails;
