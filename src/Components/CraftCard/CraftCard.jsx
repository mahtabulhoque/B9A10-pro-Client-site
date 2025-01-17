import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

const CraftCard = ({ craft }) => {
  const {
    _id,
    image,
    item_name,
    subcategory_name,
    short_description,
    price,
    rating,
    customization,
    processing_time,
    stock_status,
  } = craft;

  return (
    <div className="card flex lg:card-side bg-gray-200 shadow-xl">
      <div className="p-4 flex rounded-xl">
        <figure>
          <img src={image} alt="Album" />
        </figure>
      </div>
      <div className="card-body">
        <h2 className="card-title text-gray-700 text-2xl">Item Name: {item_name}</h2>
        <p className="text-gray-800 font-medium">Category: {subcategory_name}</p>
        <p className=" text-gray-600 font-semibold">Description: {short_description}</p>
        <p className="text-[20px] text-rose-700 font-bold">Price: {price}</p>
        <p className="text-[20px] text-green-600 font-bold">Rating: {rating}</p>
        <p className="text-[20px] text-gray-500 font-bold">Stock Status: {stock_status}</p>
        <p className="text-[20px] text-rose-800 font-bold">Time: {processing_time}</p>
        <p className="text-[20px] text-sky-500 font-medium">Customization: {customization}</p> 
        <div className="card-actions justify-end">
          <Link to={`/addCraftItem/${_id}`}>
            <button className="btn bg-amber-600 border-none btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// CraftCard.propTypes = {
//   craft: PropTypes.shape({
//     _id: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     item_name: PropTypes.string.isRequired,
//     subcategory_name: PropTypes.string.isRequired,
//     short_description: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     rating: PropTypes.number.isRequired,
//     customization: PropTypes.bool.isRequired,
//     processing_time: PropTypes.string.isRequired,
//     stock_status: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default CraftCard;
