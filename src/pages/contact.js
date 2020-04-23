import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

import contactStyles from './contact.module.scss'

const ContactPage = () => {
  return (


    <Layout>




      <Head title="Contact" />
      <h2>Contact</h2>
      <p>The page to contact me.</p>


      <form method="post" netlify-honeypot="bot-field" data-netlify="true">
        <input type="hidden" name="bot-field" />
        <label>
          Name
    <input type="text" name="name" id="name" />
        </label>
        <label>
          Email
    <input type="email" name="email" id="email" />
        </label>
        <label>
          Subject
    <input type="text" name="subject" id="subject" />
        </label>
        <label>
          Message
    <textarea name="message" id="message" rows="5" />
        </label>
        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
      </form>
    </Layout>

  )
}

export default ContactPage