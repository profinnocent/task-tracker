import React from 'react'
import './Testimonials.css'
import Tweet from './Tweet'
import Tweeta from './Tweeta'


const Testimonials = () => {
    return (
        <div className='testimonials'>
            <h1 className="th1">TESTIMONIALS</h1>
            <p className="thp">What our clients are saying about us.</p>
            <div className="tests">
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweeta username='DevProf' 
                handle='@devprof'
                text='I have been working with them for years and my business have really grown so much becuase of them.'
                timestamp='1:58 PM · Mar 2, 2022' />
                <Tweeta username='Aksanariz' 
                handle='@aksanar'
                text='I wish i had started with them earlier. They are a real live saver and helps me in a lot of ways with loads of other benefits.'
                timestamp='10:31 AM · Mar 3, 2022' />
                <Tweeta username='Hanandez' 
                handle='@rodrigex'
                text='THE GreenBox journey continues.....

                In the entrepreneurship journey......its more in the process than in the destination.
                
                #greenbox are #rebranding
                
                #GreenBox_Africa.....lighting up Africa'
                timestamp='9:01 PM · Mar 6, 2022' />
            </div>
        </div>
    )
}

export default Testimonials
