import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import myImage from './images/home.svg';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Navbar from './components/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div class="container">
    <App/>
  </div>
);


