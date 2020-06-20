import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
// import { Formik, Form, Field, FastField, ErrorMessage } from 'formik'
// import Recaptcha from 'react-google-recaptcha'
// import * as Yup from 'yup'
// import { Button, Input } from 'components/common'
// import { Error, Center, InputField } from './styles'

export const ContactForm = () => {
  // const handleSubmit = e => {
  //   e.preventDefault()
  // }
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-recaptcha="true"
      netlify-honeypot="bot-field"
      action="/"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>Name:</label>
        <input type="text" name="name" required />
      </p>
      <p>
        <label>Email:</label>
        <input type="email" name="email" required />
      </p>
      {/* <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p> */}
      <p>Date of event if known (placeholder)</p>
      <p>
        <label>Message:</label>
        <textarea name="message" id="input-message" rows="8" />
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

      {/* <div netlify-recaptcha></div> */}
      <ReCAPTCHA sitekey={process.env.GATSBY_RECAPTCHA_KEY} />
      <p>
        <button type="submit" id="input-submit">
          Send
        </button>
      </p>
    </form>
  )
}

// <form
//   name="contact"
//   method="POST"
//   action="/success/"
//   data-netlify="true"
//   data-netlify-honeypot="bot-field"
//   class="needs-validation"
//   novalidate netlify
//   >
//   <div className="half left cf">
//     <input type="hidden" name="form-name" value="contact" />
//     <input type="text" name="name" id="input-name" className="form-control" placeholder="Your Name" required />
//     <input type="email" name="email" id="input-email" className="form-control" placeholder="Email address" title="Email (format: your@example.com)" required  />
//     <div className="invalid-feedback">
//       Please enter a valid email address.
//     </div>
//     <IntlTelInput fieldId="phonenum" fieldName="phonenum" containerClassName="intl-tel-input" inputClassName="form-control" defaultCountry="tr"/>
//   </div>
//   <div className="half right cf">
//   <textarea name="message" id="input-message" rows="4" className="form-control"  placeholder="Message"></textarea>
//   </div>
//   <div netlify-recaptcha></div>
//   <input type='submit' id="input-submit" className="btn btn-primary btn-lg btn-block" value="Send Message"
//   />
// </form>
