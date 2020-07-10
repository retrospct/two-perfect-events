import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
// import { Formik, Form, Field, FastField, ErrorMessage } from 'formik'
// import Recaptcha from 'react-google-recaptcha'
// import * as Yup from 'yup'
import { Button, InputContrast, TextFieldContrast } from 'components/common'
import { FormField, FormFieldSplit, Label, ErrorMessage } from './styles'

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
      <FormFieldSplit>
        <Label htmlFor="contact-name">
          <span>Name*</span>
          <InputContrast type="text" name="name" id="contact-name" required />
        </Label>
        <Label htmlFor="contact-phone">
          <span>Phone*</span>
          <InputContrast type="tel" name="phone" id="contact-phone" required />
        </Label>
      </FormFieldSplit>
      <FormFieldSplit>
        <Label htmlFor="contact-email">
          <span>Email*</span>
          <InputContrast type="email" name="email" id="contact-email" required />
        </Label>
        <Label htmlFor="contact-dateloc">
          <span>Date & Location</span>
          <InputContrast type="text" name="dateloc" id="contact-dateloc" required />
        </Label>
      </FormFieldSplit>
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
          <TextFieldContrast name="message" id="contact-message" rows="5" />
        </Label>
      </FormField>
      {/* <ErrorMessage>Error placeholder</ErrorMessage> */}
      <FormField>
        <Button type="submit" id="input-submit">
          Submit
        </Button>
      </FormField>
      <FormField>
        <ReCAPTCHA sitekey={process.env.GATSBY_RECAPTCHA_KEY} />
      </FormField>
    </form>
  )
}

// <div className="field half first">
//     <label htmlFor="name">Name</label>
//     <input type="text" name="name" id="name" />
//   </div>
//   <div className="field half">
//     <label htmlFor="email">Email</label>
//     <input type="text" name="email" id="email" />
//   </div>
//   <div className="field">
//     <label htmlFor="message">Message</label>
//     <textarea name="message" id="message" rows="6" />
//   </div>
//   <ul className="actions">
//     <li>
//       <input type="submit" value="Send Message" className="special" />
//     </li>
//     <li>
//       <input type="reset" value="Clear" />
//     </li>
//   </ul>
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
