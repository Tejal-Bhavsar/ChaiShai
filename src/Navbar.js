import React from 'react'
import ReactDOM from "react-dom"
import './Navbar.css'
import Notfound from './Notfound'
import Slogan from './Slogan'
import { NavLink } from 'react-router-dom'

import Gallary from './Gallary';
import Chais from './Chais';

// import Carousal from './Carousal'

 


export default function Navbar() {
    return (
      
        <div>
          <nav className="navbar navbar-expand-lg navbar-light">
          <a  className="navbar-brand pl-5"  href="#">
            <img src="https://www.vhv.rs/dpng/d/284-2840045_cropped-once-upon-a-chai-glass-chai-clipart.png" className="brand" />
         </a>
            <NavLink to="/" className="navbar-brand">ChaiShai</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            
                <div className="collapse navbar-collapse"  id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                 
                    <li>
                        <NavLink  to='/' className="nav-link">Home</NavLink>
                    </li>
                    <li>
                        <NavLink  to='/chais' className="nav-link"  >Chai's</NavLink>
                    </li>
                    <li>
                        <NavLink to='/gallary' className="nav-link"  >Gallary</NavLink>
                    </li>    
                    </ul>  
                </div>
             
         </nav>
         <div className="bag">
           
         </div>
        <Slogan />

        
         
         
        

        </div>
      
       
    )
}
