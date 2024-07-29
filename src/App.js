import React from "react";
import NavBar from "./components/NavBar/NavBar";
import SectionVideo from "./components/Section/SectionVideo";

function App() {
  return (
    <div>
      <NavBar/>
      <SectionVideo title='98A185' description='El primer crónografo curvo del mundo' 
      ctaTitle='Descubre Más' ctaLink='#' startVideo />
    </div>
  );
}

export default App;
