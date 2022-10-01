import React from 'react'

import img from "../assets/imgs/islamic.png"
function Home() {
  return (
   <div className='home-page'>
     <div className='home container'>
        <h1>И напоминай, ибо напоминание приносит пользу верующим</h1>
        <div className='home-img'>
        <img src={img} alt="" />
        </div>
    </div>
    <footer className='home-footer'>
      <div className='contact-me'>
        <p>+998(99)-534-48-52</p>
        <a href="#">paladinbond59@gmail.com</a>
      </div>
    </footer>
   </div>
  )
}

export default Home