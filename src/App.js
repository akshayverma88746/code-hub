import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import myImage from './images/home.svg';
import Navbar from './components/Navbar';
import DataProvider from './context/DataProvider';
import Home1 from './components/Home1';
import Cedit from './components/cedit';
import Home from './screens/Home';
import Playground from './screens/Playground';
import Error404 from './screens/Error404';
import { GlobalStyle } from './style/global';
import ModalProvider from './context/ModalContext';
import PlaygroundProvider from './context/PlaygroundContext';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import HomePage from './components/HomePage';

function App() {
    return (
    <PlaygroundProvider>
    <ModalProvider>
    <Router>
      <DataProvider>
        <Navbar/>
        <Routes>
          <Route exact path="/" Component={HomePage}/>
          <Route path="/webdev" Component={Home1}/>
          <Route path="/ceditor" Component={Home} />
          <Route path="/playground/:folderId/:playgroundId" element={<Playground />} />
        </Routes>
      </DataProvider>
    </Router>
    </ModalProvider>
    </PlaygroundProvider>
    );
  }


  

export default App;
