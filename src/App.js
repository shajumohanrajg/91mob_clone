import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from '@mui/material';
import NavBar from './Navbar';
import Mobile from './mobilepage';
import Singlemobile from './singlemobilepage';
import Footer from './footer';
//import './App.css';


//import Navbar from './components/Navbar';
import  Home  from './homepage';
// import { Login } from './components/screens/Login';
// import { Profile } from './components/screens/Profile';
// import { Signup } from './components/screens/Signup';

function App() {
  return (
    <>
   
    {/* <ToolbarComponent /> */}
    <Container disableGutters  sx={{padding:"none",margin:'none',maxWidth:"xl"}} >
    <BrowserRouter>
    <NavBar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/latestmobiles" element={<Mobile />} />
        <Route path="/mobiles" element={<Singlemobile />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
    </Routes>
   




    </BrowserRouter>
    </Container>
    <Footer />
    </>

  );
}

export default App;