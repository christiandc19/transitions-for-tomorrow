import React from 'react'
import './Hero.css'
import Fade from 'react-reveal/Fade';
// import { Link } from 'react-router-dom'
// import { Link as LinkRoll } from 'react-scroll'




const Hero = () => {
    return (
<>        
<div className='hero'>
    <div className="hero-container">

        <div className="content">
                <Fade left>
                <h1>Transitions For Tomorrow</h1>
                </Fade>
                <Fade right>
                <p>Overcome challenges through evidence-based practices that set you up for success and stability in your life.</p>
                </Fade>
        </div>

    </div>
</div>
</>

    )
}

export default Hero