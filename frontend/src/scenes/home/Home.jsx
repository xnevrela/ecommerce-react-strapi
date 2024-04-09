import MainCarousel from "./MainCarousel";
import ShoppingList from "./ShoppingList";
import Subscribe from "./Subscribe";

const Home = () => {
    return (
        <>
        {/* MAIN CAROUSEL */}
        <MainCarousel />
        {/* SHOPPING LIST */}
        <ShoppingList />
        {/* SUBSCRIBE NEWSLETTER */}
        <Subscribe />
        {/* FOOTER */}
        </>
    )
};

export default Home;