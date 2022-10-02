import React from 'react'
import "../StyleInScss/navMenu.css"
function DropMenu() {

    function click(){
      const navMenu =document.querySelector(".navMenu")
    const menu =document.querySelector(".drop-menu")
    navMenu.classList.toggle("active")
    menu.classList.toggle("close-drop")
 }
 function close(){
    const menu =document.querySelector(".drop-menu")
    const navMenu =document.querySelector(".navMenu")
    menu.classList.remove("close-drop")
    navMenu.classList.remove("active")
 }
  return (
<div className='fx'>
    
<div onClick={click} className='navMenu'>
  <span></span>
  <span></span>
  <span></span>
</div>
<div className='drop-menu' >
        
        <div className="drop">
            <a onClick={close} href="#duaforparrents">Дуа за родителей</a>
            <a onClick={close} href="#duaforparadise">Дуа для тех кто хочет попасть в рая</a>
            <a onClick={close} href="#duaofsickness">Дуа от болезни</a>
            <a onClick={close} href="#laylatulqodr">Дуа в ночь предопределения</a>
            <a onClick={close} href="#rich">Дуа для богатства</a>
            <a onClick={close} href="#duaformarrige">Дуа, чтобы выйти за праведного человека Замуж</a>
            <a onClick={close} href="#duabeforesleep">Дуа перед сном</a>
            <a href="#">Dua</a>
            <a href="#">Dua</a>
            <a href="#">Dua</a>
            <a href="#">Dua</a>
            <a href="#">Dua</a>
            <a href="#">Dua</a>
            <a  href="#">Dua</a>
            </div>    
            
            

        </div>
        
</div>
  )
}

export default DropMenu