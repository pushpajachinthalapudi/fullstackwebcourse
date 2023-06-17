import React from 'react'
import { BrowserRouter as
    Router,
    Routes,
    Route,
  } from "react-router-dom";
import Navbar from './Navbar'
import Business from './Business';
import Ideas from './Ideas';
import About from './About';


function WebPage() {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route exact path='/business' element ={<Business />}>
            </Route>
        </Routes>
        <Routes>
            <Route exact path='/ideas/:id' element ={<Ideas />}>
            </Route>
        </Routes>
        <Routes>
            <Route exact path='/about' element = {<About />}>
             </Route>
        </Routes>
    </Router>
  )
}

export default WebPage
