import React, { useState, createRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { Button, InputContact, TextFieldContact } from 'components/common'
import { FormField, FormFieldSplit, Label, ErrorMessage } from './styles'
import { navigate } from 'gatsby'

const RECAPTCHA_KEY = process.env.GATSBY_RECAPTCHA_KEY
if (typeof RECAPTCHA_KEY === 'undefined') {
  throw new Error(`
  Env var GATSBY_RECAPTCHA_KEY is undefined! 
  You probably forget to set it in your Netlify build environment variables. 
  `)
}

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export const ContactPageForm = ({ config, contrast = false }) => {
  const [formState, setFormState] = useState({})
  const [errorMessage, setErrorMessage] = useState(false)
  const recaptchaRef = createRef()

  const resetForm = () => {
    setErrorMessage(false)
    setFormState({})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const recaptchaValue = recaptchaRef.current.getValue()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        'g-recaptcha-response': recaptchaValue,
        ...formState,
      }),
    })
      .then(() => {
        console.log('Success!')
        resetForm()
        navigate(form.getAttribute('action'))
        // navigate('/success')
      })
      .catch((error) => {
        console.log(error)
        setErrorMessage(true)
      })
  }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  return (
    <form
      name="contact-page"
      id="contact-page"
      method="post"
      data-netlify="true"
      data-netlify-recaptcha="true"
      netlify-honeypot="bot-field"
      action="/success"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact-page" />
      <input type="hidden" name="bot-field" />
      <FormFieldSplit>
        <Label htmlFor="contact-page-name" contrast={contrast}>
          <span>
            {config.nameLabel || 'Name'}
            {config.nameRequired && '*'}
          </span>
          <InputContact
            type="text"
            name="contact-page-name"
            id="contact-page-name"
            // placeholder="Your Name"
            // value={name}
            onChange={handleChange}
            required={config.nameRequired}
            contrast={contrast}
          />
        </Label>
        <Label htmlFor="contact-page-phone" contrast={contrast}>
          <span>
            {config.phoneLabel || 'Phone'}
            {config.phoneRequired && '*'}
          </span>
          <InputContact
            type="tel"
            name="contact-page-phone"
            id="contact-page-phone"
            // placeholder="Your Phone"
            // value={phone}
            onChange={handleChange}
            required={config.phoneRequired}
            contrast={contrast}
          />
        </Label>
      </FormFieldSplit>
      <FormFieldSplit>
        <Label htmlFor="contact-page-email" contrast={contrast}>
          <span>
            {config.emailLabel || 'Email'}
            {config.emailRequired && '*'}
          </span>
          <InputContact
            type="email"
            name="contact-page-email"
            id="contact-page-email"
            // placeholder="Your Email"
            // value={email}
            onChange={handleChange}
            required={config.emailRequired}
            contrast={contrast}
          />
        </Label>
        <Label htmlFor="contact-page-eventDate" contrast={contrast}>
          <span>
            {config.eventDateLabel || 'Event Date'}
            {config.eventDateRequired && '*'}
          </span>
          <InputContact
            type="text"
            name="contact-page-eventDate"
            id="contact-page-eventDate"
            placeholder="mm/dd/yyyy"
            // value={eventDate}
            onChange={handleChange}
            required={config.eventDateRequired}
            contrast={contrast}
          />
        </Label>
      </FormFieldSplit>
      <FormFieldSplit>
        <Label htmlFor="contact-page-referral" contrast={contrast}>
          <span>
            {config.referralLabel || 'How did you hear about us?'}
            {config.referralRequired && '*'}
          </span>
          <select
            name="contact-page-referral"
            id="contact-page-referral"
            style={{ marginTop: 28 }}
            // value={referral}
            onChange={handleChange}
          >
            {config.referralOptions.map((option) => (
              <option key={option.id} value={option?.referralType?.toLowerCase()}>
                {option.referralType}
              </option>
            ))}
          </select>
        </Label>
        {config.referralDetailEnabled && (
          <Label htmlFor="contact-page-referral-detail" contrast={contrast}>
            <span>
              {config.referralDetailLabel || 'Care to share the specific source?'}
              {config.referralDetailRequired && '*'}
            </span>
            <InputContact
              type="text"
              name="contact-page-referral-detail"
              id="contact-page-referral-detail"
              // placeholder="(e.g. Instagram post, my friend Mary, etc.)"
              // value={referralDetail}
              onChange={handleChange}
              required={config.referralDetail}
              contrast={contrast}
            />
            {config.referralHelptextEnabled && (
              <span style={{ fontSize: '0.8rem' }}>
                <em>{config.referralHelptext || 'This info really helps manage our efforts as a small business.'}</em>
              </span>
            )}
          </Label>
        )}
      </FormFieldSplit>
      <FormField style={{ marginBottom: '1rem' }}>
        <Label htmlFor="contact-page-additional-info" contrast={contrast}>
          <span>
            {config.additionalInformationLabel || 'Additional Information'}
            {config.additionalInformationRequired && '*'}
          </span>
          <TextFieldContact
            name="contact-page-additional-info"
            id="contact-page-additional-info"
            rows="6"
            // placeholder="Anything else you want to share?"
            // value={additional}
            onChange={handleChange}
            required={config.additionalInformationRequired}
            contrast={contrast}
          />
        </Label>
      </FormField>
      {errorMessage && (
        <ErrorMessage>
          <p>
            Opps! There was a problem, try again or contact us at{' '}
            <a href="mailto:contact@twoperfectevents.com" target="_blank" rel="noopener noreferrer">
              contact@twoperfectevents.com
            </a>
          </p>
          <p>Thank you for your patience.</p>
        </ErrorMessage>
      )}
      {/* <div data-netlify-recaptcha="true"></div> */}
      {Object.keys(formState).length !== 0 && <ReCAPTCHA ref={recaptchaRef} sitekey={RECAPTCHA_KEY} />}
      <FormField>
        <Button type="submit" id="contact-page-submit">
          Submit
        </Button>
      </FormField>
      {/* <FormField>
      <ReCAPTCHA sitekey={process.env.GATSBY_RECAPTCHA_KEY} />
    </FormField> */}
    </form>
  )
}

// const [name, setName] = useState('')
// const [phone, setPhone] = useState('')
// const [email, setEmail] = useState('')
// const [eventDate, setEventDate] = useState('')
// const [referral, setReferral] = useState('')
// const [referralDetail, setReferralDetail] = useState('')
// const [additional, setAdditional] = useState('')
// setName('')
// setPhone('')
// setEmail('')
// setEventDate('')
// setReferral('')
// setReferralDetail('')
// setAdditional('')
// body: encode({
//   'form-name': 'contact-page',
//   'contact-page-name': name,
//   'contact-page-phone': phone,
//   'contact-page-email': email,
//   'contact-page-eventDate': eventDate,
//   'contact-page-referral': referral,
//   'contact-page-referralDetail': referralDetail,
//   'contact-page-additional': additional,
// }),
