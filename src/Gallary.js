import React from 'react'
import './Gallary.css'
import cup5 from './asset/cup5.jpg'
import cullad from './asset/cullad.jpg'
import tea from './asset/tea.jpg'
import Pulse from 'react-reveal/Pulse';
import chai from './asset/chai.jpg'




export default function Gallary() {
    return (
        <div>
            <div  id="chais" className="gallary">
                
                <div className="set1">
                <Pulse>
                    <img className="first" src={cup5} alt="image1" />
                    <img className="second" style={{width: "300px"}} src={cullad} alt="img2" />
                    <img src={tea} alt="img3" />
                    <img  className="last" src="https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Padma_Veeranki/Ginger_Cardamom_Tea.jpg"  alt="imges"/>
                    <img src={chai}alt="img4" alt="img5" />
                </Pulse>
                </div>
                <div className="set2">

                </div>
            </div>
        </div>
    )
}
