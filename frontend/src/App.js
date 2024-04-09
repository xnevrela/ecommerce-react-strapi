import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import {useEffect} from "react";
import Home from "./scenes/home/Home";
import ItemDetails from "./scenes/itemDetails/ItemDetails";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import NavBar from "./scenes/global/NavBar";
import CartMenu from "./scenes/global/CartMenu";
import Footer from "./scenes/global/Footer";


const ScrollToTop = () => {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function App() {
  return (
    <div className="app">
        <BrowserRouter>
            <NavBar />

            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="item/:itemId" element={<ItemDetails />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="checkout/success" element={<Confirmation />} />
            </Routes>

            <CartMenu />
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
