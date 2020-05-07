import React from "react";
import Hoc from "./hoc/Hoc";
import Bestsellers from "./components/BestsellersPage/Bestsellers";
import Navbar from "./components/MainPage/Navbar/Navbar";
import Slider from "./components/MainPage/Slider/Slider";
import Video from "./components/MainPage/Video/Video";
import IconSection from "./components/MainPage/IconSection/IconSection";
import HomeHeadingSection from "./components/MainPage/HomeHeadingSection/HomeHeadingSection";
import InfoSection from "./components/MainPage/InfoSection/InfoSection";
import NewsLetter from "./components/MainPage/NewsLetter/NewsLetter";
import Footer from "./components/MainPage/Footer/Footer";
import { Route, Switch } from "react-router-dom";
import Contact from "./components/ContactPage/Contact";
import Catalogue from "./components/ProductsPage/Catalogue/Catalogue";
import GMap from "./components/AboutPage/Map/Map";
import About from "./components/AboutPage/About/About";
import { align_products } from "./components/ProductsPage/Products/Products.module.css";
import ProductDetails from "./components/ProductPage/ProductDetails";

const App = () => (
  <Switch>
    <Route
      path="/"
      exact
      render={() => (
        <Hoc>
          <Navbar />
          <Slider />
          <IconSection />
          <HomeHeadingSection />
          <InfoSection />
          <Video />
          <NewsLetter />
          <Footer />
        </Hoc>
      )}
    />
    <Route
      path="/catalogue"
      render={() => (
        <Hoc>
          <Navbar />
          <Catalogue />
        </Hoc>
      )}
    />
    <Route
      path="/about"
      render={() => (
        <Hoc>
          <Navbar />
          <div>
            <About />
            <GMap />
          </div>
        </Hoc>
      )}
    />
    <Route
      path="/contact"
      render={() => (
        <Hoc>
          <Navbar />
          <Contact />
        </Hoc>
      )}
    />
    <Route
      path="/bestsellers"
      render={() => (
        <Hoc>
          <Navbar />
          <Bestsellers />
        </Hoc>
      )}
    />
    <Route path="/Produkt/:id" component={ProductDetails} />
  </Switch>
);

export default App;
