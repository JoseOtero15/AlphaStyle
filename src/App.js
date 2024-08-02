import React from "react";
import NavBar from "./components/NavBar/NavBar";
import LandingOptions from "./components/LandingOptions/LandingOptions";
import Section from "./components/Section/Section";
import video_1 from "./assets/videos/98A185_CURV.mp4"
import video_2 from "./assets/videos/0725.mp4"
import background3 from "./assets/images/Background-3.png"
import './App.css'

function App() {
  return (
    <div>
      <div className="sections">
        <NavBar/>
        <div className="snap">
          <Section title='98A185' description='El primer crónografo curvo del mundo' 
          ctaTitle='Descubre Más' ctaLink='#' 
          category='Relojes' video={ video_1 } 
          primaryColor='#FBFCF8' hoverColor='#0F0F0F'/>
        </div>

        <div className="snap">
          <LandingOptions/>
        </div>

        <div className="snap">
          <Section title='ESTILO ALFA' description='Seguridad y confianza lo proyecta un buen reloj' 
          ctaTitle='Ver Relojes Bulova' ctaLink='#' 
          category='Marca' image={ background3 } 
          primaryColor='#FBFCF8' hoverColor='#0F0F0F' 
          extraCta extraCtaTitle='Ver Relojes Casio' extraCtaLink='#'/>
        </div>

        <div className="snap">     
          <Section title='97A164' description='Distintivo cristal de borde a borde' 
          ctaTitle='Explora' ctaLink='#' category='Relojes' video={ video_2 } 
          primaryColor='#FBFCF8' hoverColor='#0F0F0F'/>
        </div>
      </div>
    </div>
  );
}

export default App;
