import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes , Route } from 'react-router-dom';
import ViewEvents from './pages/ViewEvents';
import AddEvents from './pages/AddEvents';
import DeleteEvents from './pages/DeleteEvents';
import Home from './pages/Home';
import Head from './Head';
function App() {

  return (
    <>
    <main className='container'>
      <Router>
       <Head/>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/show-events" element={<ViewEvents/>} />
            <Route path="/add-events" element={<AddEvents/>} />
            <Route path="/delete-events" element={<DeleteEvents/>} />
          </Routes>
        </div>
      </Router>
    </main>
    </>
  );
  
}

export default App;
