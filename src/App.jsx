import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";

const App = () => {
  return (
    <div>
      <Header />
      <div className="h-screen mt-4 mb-[2100px]">

      <Content />
      </div>
      <Footer />
    </div>
  );
};

export default App;
