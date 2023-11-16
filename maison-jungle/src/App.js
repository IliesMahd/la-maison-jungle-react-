import { Routes, Route } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import './styles/variables.scss';
import { Products } from "./components/Products";
import { Brand } from "./components/Brand";

function App() {
  return (
    <div className="container-app">
      <Header/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/brand" element={<Brand/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
