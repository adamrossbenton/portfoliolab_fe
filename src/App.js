import './App.css';

import { Route, Routes } from 'react-router-dom';
// Components
import Header from "./components/Header"
import Footer from "./components/Footer"
// Pages
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"

function App() {
  const URL = "https://havetomakeportfolioforlab.herokuapp.com/"

  return (
    <div className="App">
      <div className="homepage-format">
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects URL={URL}/>}/>
          <Route path="/about" element={<About URL={URL}/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
