import React from 'react';
import './App.css';
import Listado from './pages/Listado';
import {BrowserRouter as Router} from "react-router-dom"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div>
          <Routes>
            <Route path="/" element={<Listado/>}/>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
