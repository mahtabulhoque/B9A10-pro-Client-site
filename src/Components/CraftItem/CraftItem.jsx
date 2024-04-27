import { useLoaderData } from "react-router-dom";
import CraftCard from "../CraftCard/CraftCard";
import AllArtCraft from "../AllArtCraft/AllArtCraft";

const CraftItem = () => {
  const craftsItem = useLoaderData();

  return (
    <div>
      <h2 className="text-[30px] lg:text-[40px] font-extrabold text-center text-rose-700 py-10">
        Craft Item
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
      {
        craftsItem.map(craft => <CraftCard
        key={craft._id}
        craft={craft}
        ></CraftCard>,
        <AllArtCraft
        key={craftsItem._id}></AllArtCraft>
      
      )
        
      }
      </div>
    </div>
  );
};

export default CraftItem;
