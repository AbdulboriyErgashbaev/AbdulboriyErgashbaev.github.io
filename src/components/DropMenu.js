import React from 'react'
function DropMenu() {

    function click(){
    const menu =document.querySelector(".drop-menu")
    menu.classList.toggle("close-drop")
 }
 function close(){
    const menu =document.querySelector(".drop-menu")
    menu.classList.remove("close-drop")
 }
  return (
<div className='fx'>
    
<i onClick={click} class="bi bi-list"></i>
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