import { useLoaderData } from "react-router-dom";
import CraftCard from "../CraftCard/CraftCard";

const CraftItem = () => {
  const craftsItem = useLoaderData();

  return (
    <div>
      <h2 className="text-[30px] lg:text-[40px] font-extrabold text-center text-rose-700 py-10">
        Craft Item :{craftsItem.length}
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
      {
        craftsItem.map(craft => <CraftCard
        key={craft._id}
        craft={craft}
        ></CraftCard>)
      }
      </div>
    </div>
  );
};

export default CraftItem;
