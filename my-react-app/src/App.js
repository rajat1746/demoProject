// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/home";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/navbar";
import OrderNow from "./Components/Order/OrderNow";
import "./App.css";

const App = () => {
  return (
    <div id='root'>
      <Router>
        <Header />
        <div id='main-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/orderNow' element={<OrderNow />} />
          </Routes>
        </div>
       {/* <Footer /> */}
      </Router>
    </div>
  );
};

export default App;
