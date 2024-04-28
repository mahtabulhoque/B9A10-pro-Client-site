import { useLoaderData } from "react-router-dom";

const SingleItemDetails = () => {
    const itemDetails = useLoaderData(null);
    console.log(itemDetails);

   
    const { 
        item_name, 
        subcategory_name,
        short_description, 
        price,
        rating, 
        stock_status, 
        processing_time, 
        customization,
        image
    } = itemDetails;

    return (
        <div className="card flex lg:card-side bg-sky-300 shadow-xl">
            <div className="p-4 flex rounded-xl">
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
                    
                </div>
            </div>
        </div>
    );
};

export default SingleItemDetails;
