import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
// import { Formik, Form, Field, FastField, ErrorMessage } from 'formik'
// import Recaptcha from 'react-google-recaptcha'
// import * as Yup from 'yup'
import { Button, Input, TextField } from 'components/common'
import { FormField, Label, ErrorMessage } from './styles'

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
      action="/success"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <FormField>
        <Label htmlFor="contact-name">
          <span>Name</span>
          <Input type="text" name="name" id="contact-name" required />
        </Label>
      </FormField>
      <FormField>
        <Label htmlFor="contact-email">
          <span>Email</span>
          <Input type="email" name="email" id="contact-email" required />
        </Label>
      </FormField>
      {/* <FormField>
    <Label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></Label>
  </FormField> */}
      {/* <p>Date of event if known (placeholder)</p> */}
      <FormField>
        <Label htmlFor="contact-message">
          <span>Message</span>
          <TextField name="message" id="contact-message" rows="8" />
        </Label>
      </FormField>
      {/* <ErrorMessage>Error placeholder</ErrorMessage> */}
      <FormField>
        {process.env.NODE_ENV === 'development' && <ReCAPTCHA sitekey={process.env.GATSBY_RECAPTCHA_KEY} />}
      </FormField>
      <FormField>
        <Button type="submit" id="input-submit">
          Send
        </Button>
      </FormField>
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
