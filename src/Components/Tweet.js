import React from 'react'
import './Tweet.css'
import twicon from './assets/twitter.png'


const Tweet = () => {
  return (
    <div className="tweet">
    <div className="tweethead">
        <div className="tweetimg">
            <i className="fa fa-user"></i>
        </div>
        <div className="user">
            <h3>Bhargav</h3>
            <p>@codewithbhargav</p>
        </div>
        <div className="twicon">
            <img src={twicon} alt="" />
        </div>
    </div>

    <div className="tweetbody">
        <p>They are the best with excellent customer care service. I highly recommend them.</p>
    </div>
    <hr />
    <a href="https://twitter.com/magicalinnocent/status/1496248076482367496">11:18 PM · Feb 22, 2022</a>

</div>
)
}

export default Tweet
