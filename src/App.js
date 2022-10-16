import React,{Fragment} from 'react';
import Navbar from "./Component/Navbar"
import Home from "./Component/Home"
import Property from "./Component/Property"
import Services from "./Component/Services"
import Work from "./Component/Work"
import Accordion from "./Component/Accordion"
import Counter from "./Component/Counter"
import Agents from "./Component/Agents"
import Footer from "./Component/Footer"
import './App.css';

const App = () => {
  return (
  
    <Fragment>

    <Navbar/>
    <Home/>
    <Property/>
    <Services/>
    <Work/>
    <Accordion/>
    <Counter/>
    <Agents/>
    <Footer/>

    </Fragment> 
  )
} 
 
export default App