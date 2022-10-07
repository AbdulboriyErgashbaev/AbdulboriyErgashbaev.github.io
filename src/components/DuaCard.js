import React from 'react'
import "../StyleInScss/duaCard.css"
function DuaCard(props) {
  return (
    <div className='card' >
       <div className="card1">
       <div className='right'><p> {props.zametka} </p></div>
        <h1>{props.name}</h1>
        <h3>{props.transcription}</h3>
        <audio src={props.audi} controls></audio>
        <h3>{props.translation}</h3>
       </div>
    </div>
  )
}

export default DuaCard