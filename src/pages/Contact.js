import React from 'react'

function Contact() {
  return (
    <div className='contact-us'>
        <div className='form'>
            <form action="#">
                <label htmlFor="name">
                    Ваше имя:
                </label>
                <input minLength={5} maxLength={15} type="text" name="" id=""  placeholder='Введите ваше имя'/>
                <br />
                <label minLength={5} maxLength={15} htmlFor="name">
                    Ваша фамилия:
                </label>
                <input type="text" name="" id=""  placeholder='Введите вашу фамилию'/>
                <textarea maxLength={300} name="" id="" cols="30" rows="10" placeholder='Ваше сообщение'></textarea>
                <button type='button'>отправить</button>
            </form>
        </div>
    </div>
  )
}

export default Contact