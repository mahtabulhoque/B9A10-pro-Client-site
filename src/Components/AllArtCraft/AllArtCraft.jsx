import { useLoaderData } from "react-router-dom";
import ArtCard from "../ArtCard/ArtCard";



const AllArtCraft = () => {
  const allArtCraft = useLoaderData();
  
  
  return (
    <div>
      <h2 className="text-[30px] lg:text-[40px] font-extrabold text-center text-black py-10">
        All Cart
      </h2>
      <div className="w-full mx-auto py-10 space-y-10">
        {
          allArtCraft.map(arts => <ArtCard
          key={arts._id}
          arts={arts}></ArtCard>)
        }
      </div>
    </div>
  );
};

export default AllArtCraft;