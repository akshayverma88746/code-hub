import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import DataProvider from './context/DataProvider';
import Home1 from './components/Home1';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './components/HomePage';
import Landing from './components/Landing';

function App() {
    return (
    <DataProvider>
    <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" Component={HomePage}/>
          <Route path="/webdev" Component={Home1}/>
          <Route path="/ceditor" Component={Landing} />
        </Routes>
    </Router>
    </DataProvider>
    );
  }


  

export default App;
