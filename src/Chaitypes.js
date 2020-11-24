import React from 'react'
import './Chaitypes.css';
import {Chaidata} from './Chaidata'
 
import Fade from 'react-reveal/Fade';

export default function Chaitypes() {
     
    
        return(
            <div>
                <div className="chaitypes">
                    <Fade top>
                     <h1>Enjoy diffrent Varieties Here</h1>
                    </Fade>
                    <div class="carousel" data-flickity>
                       
                        {  Chaidata.map((chai,index) => {
                            return ( 
                                <div class="carousel-cell">
                                    <div class="card">
                                        <img src={chai.img}/>
                                        <div class="container">
                                            <h4>{chai.name}</h4> 
                                            <p>{chai.info}</p> 
                                        </div>
                                    </div>
                                </div>
                           
                            ) }) }
                      
                    </div>
             
                </div>
            
            </div>
        )
    
   
     
}
