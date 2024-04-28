import { Link } from "react-router-dom";

const ArtCard = ({ arts }) => {
  const {id, subcategory_name, short_description, stock_status,image } = arts;

  return (
    <div className="overflow-x-auto">
  <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
    <thead className="bg-gray-200 text-xl text-gray-800 uppercase">
      <tr>
        <th className="py-3 px-4 text-left">Name</th>
        <th className="py-3 px-4 text-left">Description</th>
        <th className="py-3 px-4 text-left">Stock Status</th>
        <th className="py-3 px-4 text-left">Actions</th>
        {/* New cell for image */}
        <th className="py-3 px-4 text-left">Item Photo</th>
      </tr>
    </thead>
    <tbody className="text-gray-500">
      <tr className="bg-gray-100 text-[18px] font-medium">
        <td className="py-3 px-4 border-b">{subcategory_name}</td>
        <td className="py-3 px-4 border-b">{short_description}</td>
        <td className="py-3 px-4 border-b">{stock_status}</td>
        <td className="py-3 px-4 border-b">
          <Link to={`/addCraftItem/${id}`}>
            <button className="bg-cyan-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              View Details
            </button>
          </Link>
        </td>
        {/* Image cell */}
        <td className="py-3 px-4 border-b">
          <img src={image} alt='' className="h-12 w-12 object-cover rounded-full" />
        </td>
      </tr>
    </tbody>
  </table>
</div>

  );
};

export default ArtCard;
