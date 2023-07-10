import React from 'react';

function ContactUS() {
  return (
    <div id='contact'>
        <h1>CONTACT US</h1>
        <form>
            <input type='text' placeholder='Full Name' required/>
            <input type='text' placeholder='E-mail address' required/>
            <textarea placeholder='Write Here........' name='message'/>
            <input type='submit' value='Send'/>
        </form>
    </div>
  )
}

export default ContactUS;