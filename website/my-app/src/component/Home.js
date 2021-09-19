import React from "react";
import textbookImage from './images/textbookclipart.png';
import About from './About.js';
import HomeImage from './HomeImage.js';
import './App.css'

const Home = () => {
    return (
        <div class = "App">
          <div id = "logo">
        <h1 id = "header">book exchange</h1>
        <img id = "clipart" src = {textbookImage} />
        </div>
        
        <HomeImage/>
        <About/> 
        </div>
      ); 
}

export default Home;