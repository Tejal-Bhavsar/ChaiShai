import React from 'react'
import './Chais.css'
import Fade from 'react-reveal/Fade';
import HeadShake from 'react-reveal/HeadShake';

import cut3 from './asset/cut3.jpg'
import cut4 from './asset/cut4.jpg'

export default function Chais() {
    return (
        <div>
            <div className="chais" > 
             <HeadShake>
             <h1 className="animate__fadeInDown">Chai is "Everything"</h1>
             </HeadShake>
              
             <div className="content row">
                 <div className="chai col-6-sm col-6-md" >
                    <Fade left>
                        <img className="img1" src={cut3} alt="img1" />
                        <img src={cut4} alt="img2" />
                    </Fade>
                 </div>
                    <Fade right>
                        <div className="description col-6-sm  col-6-md">
                            <p>  We run on Chai . If you are tired.. Chai. If you are happy then Chai , If you feel gloomy Chai .
                            there is always a reason for having a Chai no matter What it is.. Chai is everywhere and everything its just like a petrol . Fuels  body and
                            soul . "Magic in the Mug" A good, authentic cup of chai, those you’d find at most homes in India and its street corners, is a perfect balance between tea and milk. You do not steep chai, you brew it. You brew it in way that perfectly combines the tannic strength of the black tea with sweetness of piping hot milk, embellished further by the addition of sugar. It’s a perfect drink, in its own right. But no tea expert will ever tell you that.
                            </p>
                        </div>
                    </Fade>
                 
             </div>
            </div>

        </div>
    )
}
