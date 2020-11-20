import React from 'react'
import './Navbar.css'
import Slogan from './Slogan'

// import Carousal from './Carousal'

 


export default function Navbar() {
    return (
        <div  >
          <nav className="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand pl-5"  href="#">
            <img src="https://www.vhv.rs/dpng/d/284-2840045_cropped-once-upon-a-chai-glass-chai-clipart.png" className="brand" />
         </a>
            <a className="navbar-brand" href="#">ChaiShai</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse"  id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li>
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li>
                    <a className="nav-link" href="#">Chai's</a>
                </li>
                <li>
                    <a className="nav-link" href="#">Gallary</a>
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
