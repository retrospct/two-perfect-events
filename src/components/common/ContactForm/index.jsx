import React from 'react'
// import { Formik, Form, Field, FastField, ErrorMessage } from 'formik'
// import Recaptcha from 'react-google-recaptcha'
// import * as Yup from 'yup'
// import { Button, Input } from 'components/common'
// import { Error, Center, InputField } from './styles'

export const ContactForm = () => {
  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
    <form
      name="contact"
      method="POST"
      data-netlify-recaptcha="true"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>
          Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Email: <input type="email" name="email" />
        </label>
      </p>
      {/* <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p> */}
      <p>Date of event if known (placeholder)</p>
      <p>
        <label>
          Message: <textarea name="message" />
        </label>
      </p>
      {/* <p> */}
      {/* <input
              component={Recaptcha}
              sitekey={process.env.GATSBY_PORTFOLIO_RECAPTCHA_KEY}
              name="recaptcha"
              onChange={value => setFieldValue('recaptcha', value)}
            /> */}
      {/* <ErrorMessage component={Error} name="recaptcha" /> */}
      {/* </p> */}
      <input type="hidden" name="bot-field" />
      <div data-netlify-recaptcha="true" />
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  )
}
