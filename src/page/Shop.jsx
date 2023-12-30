import Newcollection from "../Components/newcollection/Newcollection";
import Offers from "../Components/offers/Offers";
import Popular from "../Components/popular/Popular";
import Hero from "../Hero/Hero";


const Shop = () => {
    return (
        <div>
            <Hero></Hero>
            <Popular></Popular>
            <Offers></Offers>
            <Newcollection></Newcollection>
        </div>
    );
};

export default Shop;