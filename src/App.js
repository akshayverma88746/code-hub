import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import myImage from './images/home.svg';
import Navbar from './components/navbar';
import Webd from './components/webdev';
import Cedit from './components/cedit';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
function App() {
    return (
    <Router>
      <>
        <Navbar/>
        <Routes>
            <Route exact path="/webdev" element={<Webd/>}/>
            <Route exact path="/cedit" element={<Cedit/>}/>
        </Routes>
        <h1 class="h11" align="left">Unleash Your Inner Developer</h1>
        <img src={myImage} alt="My Image" id="imgtag"/>
        <p id="ptag" align="left">Dive into the world of coding with out powerful online code editor project. Create, collaborate, and conquer any coding challenge, all while having a blast</p>
      </>
      </Router>
    );
  }


  

export default App;
