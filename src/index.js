import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import myImage from './images/home.svg';
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <div class="container">
    <h1 class="h11" align="left">Unleash Your Inner Developer</h1>
    <img src={myImage} alt="My Image" id="imgtag"/>
    <p id="ptag" align="left">Dive into the world of coding with out powerful online code editor project. Create, collaborate, and conquer any coding challenge, all while having a blast</p>
  </div>
  </BrowserRouter>
);


