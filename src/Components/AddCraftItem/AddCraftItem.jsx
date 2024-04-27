import { useState } from "react";
import Swal from 'sweetalert2'

const AddCraftItem = () => {

  const [newItem, setNewItem] = useState({
    image: "",
    item_name: "",
    subcategory_name: "",
    short_description: "",
    price: "",
    rating: "",
    customization: "No",
    processing_time: "",
    stock_status: "In stock",
    user_email: "",
    user_name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to handle form submission
    console.log(newItem);

    fetch('http://localhost:5000/addCraftItem/',{
        method:'POST',
        headers:{
            'content-type' : 'application/json'
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
    })
    
    setNewItem({
      image: "",
      item_name: "",
      subcategory_name: "",
      short_description: "",
      price: "",
      rating: "",
      customization: "No",
      processing_time: "",
      stock_status: "In stock",
      user_email: "",
      user_name: "",
    });
  };

  return (
    <div className="container mx-auto mt-8 bg-[#F4F3F0] p-10 border border-black rounded-2xl text-[18px]">
        <h1 className="text-center mb-10 font-bold text-[30px] text-rose-600">Fill Up The Form</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">

       
        <div className="mb-4">
          <label type="image" className="block mb-2 font-semibold">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            id="image"
            placeholder="Photo URL"
            value={newItem.image}
            onChange={handleChange}
            className="w-full border rounded-xl border-gray-400 p-2"
          />
        </div>
        <div className="mb-4">
          <label type="item_name" className="block font-semibold mb-2">
            Item Name
          </label>
          <input
            type="text"
            name="item_name"
            id="item_name"
            placeholder="Item Name"
            value={newItem.item_name}
            onChange={handleChange}
            className="w-full border rounded-xl border-gray-400 p-2"
          />
        </div>


        <div className="mb-4">
          <label type="subcategory_name" className="block font-semibold mb-2">
            Subcategory Name
          </label>
          <input
            type="text"
            name="subcategory_name"
            id="subcategory_name"
            placeholder="Subcategory Name"
            value={newItem.subcategory_name}
            onChange={handleChange}
            className="w-full border rounded-xl border-gray-400 p-2"
          />
        </div>
        <div className="mb-4">
          <label type="short_description" className="block font-semibold mb-2">
            Short Description
          </label>
          <textarea
            name="short_description"
            id="short_description"
            placeholder="Description"
            value={newItem.short_description}
            onChange={handleChange}
            className="w-full border rounded-xl border-gray-400 p-2"
          ></textarea>
        </div>
        <div className="mb-4">
          <label type="price" className="block font-semibold mb-2">
            Price
          </label>
          <input
            type="text"
            name="price"
            id="price"
            placeholder="Price"
            value={newItem.price}
            onChange={handleChange}
            className="w-full border rounded-xl border-gray-400 p-2"
          />
        </div>
        <div className="mb-4">
          <label type="rating" className="block font-semibold mb-2">
            Rating
          </label>
          <input
            type="text"
            name="rating"
            id="rating"
            placeholder="Rating"
            value={newItem.rating}
            onChange={handleChange}
            className="w-full border rounded-xl border-gray-400 p-2"
          />
        </div>
        <div className="mb-4">
          <label type="customization" className="block mb-2 font-semibold">
            Customization
          </label>
          <select
            name="customization"
            id="customization"
            value={newItem.customization}
            onChange={handleChange}
            className="w-full border rounded-xl border-gray-400 p-2"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="mb-4">
          <label type="processing_time" className="block mb-2 font-semibold">
            Processing Time
          </label>
          <input
            type="text"
            name="processing_time"
            id="processing_time"
            placeholder="Process Time"
            value={newItem.processing_time}
            onChange={handleChange}
            className="w-full border rounded-xl border-gray-400 p-2"
          />
        </div>
        <div className="mb-4">
          <label type="stock_status" className="block mb-2 font-semibold">
            Stock Status
          </label>
          <select
            name="stock_status"
            id="stock_status"
            value={newItem.stock_status}
            onChange={handleChange}
            className="w-full border rounded-xl border-gray-400 p-2"
          >
            <option value="In stock">In stock</option>
            <option value="Made to Order">Made to Order</option>
          </select>
        </div>
        <div className="mb-4">
          <label type="user_email" className="block mb-2 font-semibold">
            User Email
          </label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            placeholder="Your Email"
            value={newItem.user_email}
            onChange={handleChange}
            className="w-full border rounded-xl border-gray-400 p-2"
          />
        </div>
        <div className="mb-4">
          <label type="user_name" className="block mb-2 font-semibold">
            User Name
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            placeholder="Your Name"
            value={newItem.user_name}
            onChange={handleChange}
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
