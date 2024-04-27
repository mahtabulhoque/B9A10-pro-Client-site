

const CraftCard = ({craft}) => {

    const {image, item_name, subcategory_name, short_description, price, rating, customization,processing_time,
    stock_status,
    user_email,
    user_name
} = craft;


  return (
    <div className="card card-side bg-cyan-500 shadow-xl ">
      <figure>
        <img
          src={image}
          alt=''
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item_name}</h2>
        <p>{subcategory_name}</p>
        <p>{short_description}</p>
            <p>Price: {price}</p>
            <p>Rating: {rating}</p>
            <p>Stock Status: {stock_status}</p>
            <p>Time: {processing_time}</p>
            <p>Customization: {customization}</p>
            <p>Customization: {user_name}</p>
            <p>Customization: {user_email}</p>
        <div className="card-actions justify-end">
          <button className="btn border-none bg-rose-700 btn-primary">View Details page</button>
        </div>
      </div>
    </div>
  );
};

export default CraftCard;
