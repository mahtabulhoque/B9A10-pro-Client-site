import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import SingleCraft from "../SingleCraft/SingleCraft";

const MyArtCraft = () => {
  const { user } = useContext(AuthContext);
  const [craftData, setCraftData] = useState([]);

  // const url = `http://localhost:5000/craft-by-email?user_email=${user?.email}`;

  useEffect(() => {
    fetch(`http://localhost:5000/craft-by-email?user_email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCraftData(data));
  }, [user?.email]);

  return (
    <div>
       <h2 className="text-[30px] lg:text-[40px] font-extrabold text-center text-rose-600 py-10">
       My Art Craft
      </h2>
      <div className="grid md:grid-cols-2 gap-4" >
      {
      craftData.length <= 0 ? (
        <h1>No dta added</h1>
      ) : (
        craftData.map(data => <SingleCraft key={data._id}
        data={data}></SingleCraft>)
      )
      }
      </div>
    </div>
  );
};

export default MyArtCraft;
