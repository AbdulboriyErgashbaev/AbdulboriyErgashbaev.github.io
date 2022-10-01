import React from 'react'
import { NavLink } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
function FcNavbar() {
  function mode(){
    let body =document.querySelector("body")
    let circle =document.querySelector(".circle")
    let mode =document.querySelector(".mode")
    body.classList.toggle("sa")
    body.classList.toggle("body-mode")
    circle.classList.toggle("circle-move")
    mode.classList.add("mode-bg")

  }
  return (
    <div>
<nav className='container'>
      <div onClick={mode} className='mode'>
        <div  className='circle'></div>
      </div>
      <div className='links'>
      
      <NavLink  activeClassName="active"  className="before" to='/'>Главная </NavLink>
      <NavLink   activeClassName="active"  className="before" to='/main'>Дуа </NavLink>
      <NavLink  activeClassName="active"  className="before" to='/sura'>Суры </NavLink>
      <NavLink  activeClassName="active"  className="before" to='/hadis'>Хадисы</NavLink>
      <button className='btn btn-dark'><NavLink className="btn-a" to="contact">Связь</NavLink></button>
      </div>
    </nav>

    </div>
  )
}

export default FcNavbar