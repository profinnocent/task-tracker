import React from 'react'
import './Slider.css'
import myvideo from './assets/gears_spin.mp4'

const Slider = () => {
    return (
        <div className='slider'>
            <h1>Advance Your Skills</h1>
            <h5>with In-Depth, Modern Front-End Engineering Courses</h5>
            <div className="btns">
                <button className='btnc btn1'>Browse Our Course</button>
                <button className='btnc btn2'>View Learning Paths</button>
            </div>

            <video autoplay loop muted id='myvideo1'>
            <source src={myvideo} type='video/mp4'></source>
            </video>

        </div>
    )
}

export default Slider
