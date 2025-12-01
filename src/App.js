import logo from "./logo.svg";
import "./App.css";
// import ProductsList from "./ProductsList";
import HeroSection from "./products-page/hero-section/HeroSection";
import Header from "./products-page/header/header";
import Footer from "./products-page/footer/footer";
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProductsList from "./products-page/products-layout/ProductsList";


function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ProductsList />
      {/* <ProductsList /> */}
      <Footer/>
    </div>
  );
}

export default App;
