import PropTypes from 'prop-types';

const SingleCraft = ({ data }) => {
    const { image, item_name, price, rating, customization, stock_status } = data;

    const handleDelete = () => {
        // Add logic for deleting the item
        console.log("Delete button clicked");
    };

    const handleUpdate = () => {
        // Add logic for updating the item
        console.log("Update button clicked");
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-48" src={image} alt="Craft" />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Item Name</div>
                    <h2 className="mt-2 text-gray-900 text-xl font-semibold">{item_name}</h2>
                    <div className="mt-2">
                        <p className="text-gray-700">Price: ${price}</p>
                        <p className="text-gray-700">Rating: {rating}</p>
                        <p className="text-gray-700">Stock Status: {stock_status}</p>
                        <p className="text-gray-700">Customization: {customization}</p>
                    </div>
                    <div className="mt-4 flex gap-4">
                        <button
                            onClick={handleDelete}
                            className="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Delete
                        </button>
                        <button
                            onClick={handleUpdate}
                            className=" btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

SingleCraft.propTypes = {
    data: PropTypes.shape({
        image: PropTypes.string.isRequired,
        item_name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        customization: PropTypes.string.isRequired,
        stock_status: PropTypes.string.isRequired,
    }).isRequired,
};

export default SingleCraft;
