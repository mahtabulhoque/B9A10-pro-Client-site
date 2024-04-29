import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import PropTypes from 'prop-types';

const SingleCraft = ({ data }) => {
  const [craftData, setCraftData] = useState(data || {});

  useEffect(() => {
    const savedCraftData = localStorage.getItem("craftData");
    if (savedCraftData) {
      setCraftData(JSON.parse(savedCraftData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("craftData", JSON.stringify(craftData));
  }, [craftData]);

  const { _id, image, item_name, price, rating, customization, stock_status } =
  craftData;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
    .then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addCraftItem/${_id}`, {
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
            }
          });
      }
    });
    // console.log("Delete button clicked");
  };

  const handleUpdate = () => {
    console.log("Update button clicked");
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={image}
            alt="Craft"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Item Name
          </div>
          <h2 className="mt-2 text-gray-900 text-xl font-semibold">
            {item_name}
          </h2>
          <div className="mt-2">
            <p className="text-gray-700">Price: ${price}</p>
            <p className="text-gray-700">Rating: {rating}</p>
            <p className="text-gray-700">Stock Status: {stock_status}</p>
            <p className="text-gray-700">Customization: {customization}</p>
          </div>
          <div className="mt-4 flex gap-4">
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Delete
            </button>
            <Link to={`updateData/${_id}`}>
            <button
              onClick={handleUpdate}
              className=" btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Update
            </button>
             
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// SingleCraft.propTypes = {
//     data: PropTypes.shape({
//         image: PropTypes.string.isRequired,
//         item_name: PropTypes.string.isRequired,
//         price: PropTypes.number.isRequired,
//         rating: PropTypes.number.isRequired,
//         customization: PropTypes.string.isRequired,
//         stock_status: PropTypes.string.isRequired,
//     }).isRequired,
// };

export default SingleCraft;
