import React from 'react'
import './Skills.css'
import jsicon from './assets/js.png'
import tsicon from './assets/typescript.png'
import cssicon from './assets/css.png'
import jaicon from './assets/java.png'
import pyicon from './assets/python.png'
import ndicon from './assets/nodejs.png'
import rticon from './assets/react.png'
import myicon from './assets/mysql.png'
import gticon from './assets/github.png'


const Skills = () => {
    return (
        <div className='skills'>
            <h1>OUR SKILL STACKS</h1>
            <p>We offer a full range of technologies to help deliver your expectations.</p>
            <div className="stack">
                <img src={jsicon} alt="js" />
                <img src={tsicon} alt="js" />
                <img src={cssicon} alt="js" />
                <img src={jaicon} alt="js" />
                <img src={pyicon} alt="js" />
                <img src={ndicon} alt="js" />
                <img src={rticon} alt="js" />
                <img src={myicon} alt="js" />
                <img src={gticon} alt="js" />

            </div>

        </div>
    )
}

export default Skills
