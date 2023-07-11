import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import myImage from './images/home.svg';
import Navbar from './components/Navbar';
import DataProvider from './context/DataProvider';
import Home from './components/Home';
import Cedit from './components/cedit';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
function App() {
    return (
    <Router>
      <DataProvider>
        <Navbar/>
        <Routes>
          <Route exact path="/webdev" element={<Home/>}/>
        </Routes>
        <h1 class="h11" align="left">Unleash Your Inner Developer</h1>
        <img src={myImage} alt="My Image" id="imgtag"/>
        <p id="ptag" align="left">Dive into the world of coding with out powerful online code editor project. Create, collaborate, and conquer any coding challenge, all while having a blast</p>
        
      </DataProvider>
    </Router>
    );
  }


  

export default App;
