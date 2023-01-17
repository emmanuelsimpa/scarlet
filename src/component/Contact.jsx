import React from "react";
import "../css/contact.css";

export default function Contact() {
  return (
    <section id='contact'>
      <form action='' className='contact_form'>
        <input type='text' placeholder='Name' />
        <input type='email' placeholder='Email' />
        <input type='text' placeholder='Subject' />
        <textarea name='message' placeholder='Message me'></textarea>
        <input type='submit' value='Submit' />
      </form>
    </section>
  );
}
