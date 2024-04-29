import Swal from 'sweetalert2';

const AddCraftItem = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      image: e.target.image.value,
      item_name: e.target.item_name.value,
      subcategory_name: e.target.subcategory_name.value,
      short_description: e.target.short_description.value,
      price: e.target.price.value,
      rating: e.target.rating.value,
      customization: e.target.customization.value,
      processing_time: e.target.processing_time.value,
      stock_status: e.target.stock_status.value,
      user_email: e.target.user_email.value,
      user_name: e.target.user_name.value,
    };

    fetch('http://localhost:5000/addCraftItem/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Added Successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      }
    });

    e.target.reset();
  };

  return (
    <div className="container mx-auto mt-8 bg-[#F4F3F0] p-10 border border-black rounded-2xl text-[18px]">
        <h1 className="text-center mb-10 font-bold text-[30px] text-rose-600">Fill Up The Form</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Image URL</label>
          <input
            type="text"
            name="image"
            placeholder="Photo URL"
            className="w-full border rounded-xl border-gray-400 p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Item Name</label>
          <input
            type="text"
            name="item_name"
            placeholder="Item Name"
            className="w-full border rounded-xl border-gray-400 p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Subcategory Name</label>
          <input
            type="text"
            name="subcategory_name"
            placeholder="Subcategory Name"
            className="w-full border rounded-xl border-gray-400 p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Short Description</label>
          <textarea
            name="short_description"
            placeholder="Description"
            className="w-full border rounded-xl border-gray-400 p-2"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Price</label>
          <input
            type="text"
            name="price"
            placeholder="Price"
            className="w-full border rounded-xl border-gray-400 p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Rating</label>
          <input
            type="text"
            name="rating"
            placeholder="Rating"
            className="w-full border rounded-xl border-gray-400 p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Customization</label>
          <select
            name="customization"
            className="w-full border rounded-xl border-gray-400 p-2"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Processing Time</label>
          <input
            type="text"
            name="processing_time"
            placeholder="Process Time"
            className="w-full border rounded-xl border-gray-400 p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Stock Status</label>
          <select
            name="stock_status"
            className="w-full border rounded-xl border-gray-400 p-2"
          >
            <option value="In stock">In stock</option>
            <option value="Made to Order">Made to Order</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">User Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full border rounded-xl border-gray-400 p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">User Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full border rounded-xl border-gray-400 p-2"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full px-4 rounded-xl"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCraftItem;
