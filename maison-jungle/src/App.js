import { Routes, Route } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { ShoppingList } from "./components/ShoppingList";
import './styles/variables.scss';
import { Products } from "./components/Products";

function App() {
  return (
    <div className="container-app">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<Products/>} */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
