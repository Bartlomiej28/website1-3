import "./App.css";


import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/home/home.js";
import WhatIsGPT from "./components/what-is-GPT/what-is-gpt";
import OpenAi from "./components/open-ai/open-ai";
import CaseStudies from "./components/case-studies/case-studies";
import Library from "./components/library/library";
import Footer from "./components/footer/footer.js";
import Advertise from "./components/advertise/advertise";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar/>
        <Home/>
        <WhatIsGPT/>
        <OpenAi/>
        <CaseStudies/>
        <Advertise/>
        <Library/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
