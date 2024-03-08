import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Slide from "./components/Slide/Slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navigate from "./components/Navigate/Navigate";
import NewFeed from "./components/NewFeed/NewFeed";
import ListCourse from "./components/ListCourse/ListCourse";
import Layout from "./core/Layout";

const App = () => {
  return (
    <div>
      <Layout />
    </div>
  );
};

export default App;
