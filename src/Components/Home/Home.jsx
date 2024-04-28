import Banner from "../Banner/Banner";
import CraftItem from "../CraftItem/CraftItem";
import Footer from "../Footer/Footer";
import Artists from "../FuturePlan/Artists/Artists";
import FuturePlan from "../FuturePlan/FuturePlan";

const Home = () => {
    return (
        <div className="py-8">
           <Banner></Banner>
           <CraftItem></CraftItem>
           <div className="py-10">
           <div className="py-10 text-center font-extrabold text-4xl text-gray-600">
            <h1>Our Future Plan</h1>
           </div>
           <FuturePlan></FuturePlan>
           </div>

           <div className="py-10">
           <div className="py-10 text-center font-extrabold text-4xl text-gray-600">
            <h1>Meet Our Artist</h1>
           </div>
            <Artists></Artists>
           </div>
           <div className="py-10">
            <Footer></Footer>
           </div>
        </div>
    );
};

export default Home;