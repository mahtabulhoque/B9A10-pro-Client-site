
import { Link, useLoaderData} from "react-router-dom";


const SingleItemDetails = () => {

    const itemDetails = useLoaderData();
    console.log(itemDetails);


  
 
    return (
        <div className="card flex lg:card-side bg-sky-300 shadow-xl">
        <div className="p-4 flex rounded-xl">
        <figure>
          <img
            src=''
            alt="Album"
          />
        </figure>
        </div>
        <div className="card-body">
        <h2 className="card-title">Item Name: {}</h2>
              <p>Category: {}</p>
              <p>Description: {}</p>
              <p>Price: {}</p>
              <p>Rating: {}</p>
              <p>Stock Status: {}</p>
              <p>Time: {}</p>
              <p>Customization: {}</p> 
            <div className="card-actions justify-end">
              
            <Link to={`/addCraftItem/`}>
            <button className="btn bg-rose-700 border-none btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default SingleItemDetails;