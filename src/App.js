import React  from 'react';
import logo from './logo.svg';
import './App.css';
import Desktop1 from './Desktop1';
import Desktop2 from './Desktop2';
import {Route, Routes} from 'react-router-dom'
import Contact from './Contact';
/*import desktop4 from './desktop4';*/
/*import desktop5 from './desktop5';*/
import Desktop6 from './Desktop6';
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
   </Routes> 

   
   {/* <Futter/> */}
    </>
  );
}

export default App;