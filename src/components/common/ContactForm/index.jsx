import React, { useState, createRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { Button, InputContact, TextFieldContact } from 'components/common'
import { FormField, FormFieldSplit, Label, ErrorMessage } from './styles'
import { navigate } from 'gatsby'

export const ContactForm = ({ config, contrast = false, formName = 'contact-page' }) => {
  const [formState, setFormState] = useState({})
  const [errorMessage, setErrorMessage] = useState(false)
  const recaptchaRef = createRef()

  const RECAPTCHA_KEY = process.env.GATSBY_RECAPTCHA_KEY
  if (typeof RECAPTCHA_KEY === 'undefined') {
    throw new Error(
      `Env var GATSBY_RECAPTCHA_KEY is undefined! You probably forget to set it in your Netlify build environment variables.`
    )
  }

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

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
      name={formName}
      id={formName}
      method="post"
      data-netlify="true"
      data-netlify-recaptcha="true"
      netlify-honeypot="bot-field"
      action="/success"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value={formName} />
      <input type="hidden" name="bot-field" />
      <FormFieldSplit>
        <Label htmlFor={`${formName}-name`} contrast={contrast}>
          <span>
            {config.nameLabel || 'Name'}
            {config.nameRequired && '*'}
          </span>
          <InputContact
            type="text"
            name={`${formName}-name`}
            id={`${formName}-name`}
            // placeholder="Your Name"
            onChange={handleChange}
            required={config.nameRequired}
            contrast={contrast}
          />
        </Label>
        <Label htmlFor={`${formName}-phone`} contrast={contrast}>
          <span>
            {config.phoneLabel || 'Phone'}
            {config.phoneRequired && '*'}
          </span>
          <InputContact
            type="tel"
            name={`${formName}-phone`}
            id={`${formName}-phone`}
            // placeholder="Your Phone"
            onChange={handleChange}
            required={config.phoneRequired}
            contrast={contrast}
          />
        </Label>
      </FormFieldSplit>
      <FormFieldSplit>
        <Label htmlFor={`${formName}-email`} contrast={contrast}>
          <span>
            {config.emailLabel || 'Email'}
            {config.emailRequired && '*'}
          </span>
          <InputContact
            type="email"
            name={`${formName}-email`}
            id={`${formName}-email`}
            // placeholder="Your Email"
            onChange={handleChange}
            required={config.emailRequired}
            contrast={contrast}
          />
        </Label>
        <Label htmlFor={`${formName}-eventDate`} contrast={contrast}>
          <span>
            {config.eventDateLabel || 'Event Date'}
            {config.eventDateRequired && '*'}
          </span>
          <InputContact
            type="text"
            name={`${formName}-eventDate`}
            id={`${formName}-eventDate`}
            placeholder="mm/dd/yyyy"
            onChange={handleChange}
            required={config.eventDateRequired}
            contrast={contrast}
          />
        </Label>
      </FormFieldSplit>
      <FormFieldSplit>
        <Label htmlFor={`${formName}-referral`} contrast={contrast}>
          <span>
            {config.referralLabel || 'How did you hear about us?'}
            {config.referralRequired && '*'}
          </span>
          <select
            name={`${formName}-referral`}
            id={`${formName}-referral`}
            style={{ marginTop: 28 }}
            onChange={handleChange}
          >
            <option value="none">--</option>
            {config.referralOptions.map((option) => (
              <option key={option.id} value={option?.referralType?.toLowerCase()}>
                {option.referralType}
              </option>
            ))}
          </select>
        </Label>
        {config.referralDetailEnabled && (
          <Label htmlFor={`${formName}-referral-detail`} contrast={contrast}>
            <span>
              {config.referralDetailLabel || 'Care to share the specific source?'}
              {config.referralDetailRequired && '*'}
            </span>
            <InputContact
              type="text"
              name={`${formName}-referral-detail`}
              id={`${formName}-referral-detail`}
              // placeholder="(e.g. Instagram post, my friend Mary, etc.)"
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
        <Label htmlFor={`${formName}-additional-info`} contrast={contrast}>
          <span>
            {config.additionalInformationLabel || 'Additional Information'}
            {config.additionalInformationRequired && '*'}
          </span>
          <TextFieldContact
            name={`${formName}-additional-info`}
            id={`${formName}-additional-info`}
            rows="6"
            // placeholder="Anything else you want to share?"
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
      {Object.keys(formState).length !== 0 && <ReCAPTCHA ref={recaptchaRef} sitekey={RECAPTCHA_KEY} />}
      <FormField>
        <Button type="submit" id={`${formName}-submit`}>
          Submit
        </Button>
      </FormField>
    </form>
  )
}
