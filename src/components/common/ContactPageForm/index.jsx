import React, { useState } from 'react'
// import ReCAPTCHA from 'react-google-recaptcha'
import { Button, InputContact, TextFieldContact } from 'components/common'
import { FormField, FormFieldSplit, Label, ErrorMessage } from './styles'

export const ContactPageForm = ({ config, contrast = false }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [eventDate, setEventDate] = useState('')
  const [referral, setReferral] = useState('')
  const [referralDetail, setReferralDetail] = useState('')
  const [additional, setAdditional] = useState('')

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact-page',
        name,
        phone,
        email,
        eventDate,
        referral,
        referralDetail,
        additional,
      }),
    })
      .then(() => console.log('Success!'))
      .catch((error) => console.log(error))

    e.preventDefault()
  }

  // const handleChange = e => { [e.target.name]: e.target.value });

  return (
    <form
      name="contact-page"
      method="post"
      data-netlify="true"
      data-netlify-recaptcha="true"
      netlify-honeypot="bot-field"
      action="/success"
      className="needs-validation"
      //   novalidate netlify
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact-page" />
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
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
            value={referral}
            onChange={(e) => setReferral(e.target.value)}
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
              value={referralDetail}
              onChange={(e) => setReferralDetail(e.target.value)}
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
      <FormField>
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
            value={additional}
            onChange={(e) => setAdditional(e.target.value)}
            required={config.additionalInformationRequired}
            contrast={contrast}
          />
        </Label>
      </FormField>
      {/* <ErrorMessage>Error placeholder</ErrorMessage> */}
      <div netlify-recaptcha="true"></div>
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
