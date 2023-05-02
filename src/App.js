import React  from 'react';
import logo from './logo.svg';
import './App.css';
import Desktop1 from './Desktop1';
import Desktop2 from './Desktop2';
import {Route, Routes} from 'react-router-dom'
import Contact from './Contact';
import Desktop4 from './Desktop4';
import Desktop5 from './Desktop5';
import Desktop6 from './Desktop6';
import Desktop7 from './Desktop7';
import Desktop8 from './Desktop8';
import Desktop9 from './Desktop9';
import Desktop10 from './Desktop10';
import Desktop11 from './Desktop11';
import Desktop12 from './Desktop12';
import Desktop13 from './Desktop13';
import Desktop14 from './Desktop14';
import Desktop15 from './Desktop15';
import './global.css';
import Navbar from './Navbar/navbar';
// import Futter from './Futter';


function App() {
  return (
    <>
  <Navbar/> 

    <Routes>
    <Route  path="/" element={<Desktop1></Desktop1>}/>
    <Route path="/About us" element={<Desktop6></Desktop6>}/>
    <Route path="/training" element={<Desktop6></Desktop6>}/>
    <Route path="/Contact" element={<Desktop6></Desktop6>}/>
    <Route path="/Read More" element={<Desktop2></Desktop2>}/>
    <Route path="/Contact us" element={<Contact></Contact>}/>
    <Route path="/TRAINING" element={<Desktop6></Desktop6>}/>
    <Route path="/Guarding" element={<Desktop4></Desktop4>}/>
    <Route path="/Transportation" element={<Desktop5></Desktop5>}/>
    <Route path="/Security" element={<Desktop7></Desktop7>}/>
    <Route path="/Night" element={<Desktop8></Desktop8>}/>
    <Route path="/Electronic" element={<Desktop9></Desktop9>}/>
    <Route path="/Installation" element={<Desktop10></Desktop10>}/>
    <Route path="/Private" element={<Desktop11></Desktop11>}/>
    <Route path="/Audit" element={<Desktop12></Desktop12>}/>
    <Route path="/Staff" element={<Desktop13></Desktop13>}/>
    <Route path="/Buisness" element={<Desktop14></Desktop14>}/>
    <Route path="/Event" element={<Desktop15></Desktop15>}/>
    <Route path="Equipment" element={<Desktop9></Desktop9>}/>
   </Routes> 

   
   {/* <Futter/> */}
    </>
  );
}

export default App;