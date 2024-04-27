const ArtCard = ({ arts }) => {
  const {
    image,
    item_name,
    subcategory_name,
    short_description,
    price,
    rating,
    customization,
    processing_time,
    stock_status,
  } = arts;

  return (
    <div className="card flex lg:card-side text-white bg-gray-600 shadow-xl">
      <div className="p-4 flex">
        <figure>
          <img src={image} alt="Album" />
        </figure>
      </div>
      <div className="card-body">
        <h2 className="card-title">Item Name: {item_name}</h2>
        <p>Category: {subcategory_name}</p>
        <p>Description: {short_description}</p>
        <p>Price: {price}</p>
        <p>Rating: {rating}</p>
        <p>Stock Status: {stock_status}</p>
        <p>Time: {processing_time}</p>
        <p>Customization: {customization}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-yellow-700 border-none btn-primary">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtCard;
