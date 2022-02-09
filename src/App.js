import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from './pages/Home';
import Boarding from './pages/Boarding';
import Training from "./pages/Training";
import Contact from "./pages/Contact";
import NoPage from './pages/NoPage'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="boarding" element={<Boarding />} />
            <Route path="training" element={<Training />} />
            <Route path="contactus" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
       </BrowserRouter>
    );
  }
}

export default App;
