import React from 'react'
import './Tweeta.css'
import twicon from './assets/twitter.png'

const Tweeta = (props) => {
console.log(props)

  return (
    <div className="tweet">
    <div className="tweethead">
        <div className="tweetimg">
            <i className="fa fa-user"></i>
        </div>
        <div className="user">
            <h3>{props.username}</h3>
            <p>{props.handle}</p>
        </div>
        <div className="twicon">
            <img src={twicon} alt="" />
        </div>
    </div>

    <div className="tweetbody">
        <p>{props.text}</p>
    </div>
    <hr />
    <a href="https://twitter.com/magicalinnocent/status/1496248076482367496">{props.timestamp}</a>

</div>
  )
}

export default Tweeta
