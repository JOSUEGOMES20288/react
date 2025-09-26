
import React from "react";
import NavBar from "./components/NavB";
import Home from "./components/home";
import Escola from "./components/Escola";
import SobreMim from "./components/SobreMim";
import "./index.css";

export default function App() {
  return (
    <div className="font-sans">
      <NavBar />
      <Home />
      <Escola />
      <SobreMim />

    </div>
  );
}