import textbookImage from './images/textbookclipart.png';
import './App.css';
import About from './About.js';
import HomeImage from './HomeImage.js';



function App() {
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

export default App;
