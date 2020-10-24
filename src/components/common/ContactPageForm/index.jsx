import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { Button, InputContact, TextFieldContact } from 'components/common'
import { FormField, FormFieldSplit, Label, FormFieldOneCol, ErrorMessage } from './styles'

export const ContactPageForm = ({ config }) => (
  <form
    name="contact-page"
    method="POST"
    data-netlify="true"
    data-netlify-recaptcha="true"
    netlify-honeypot="bot-field"
    action="/success"
  >
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="form-name" value="contact-page" />
    <FormFieldSplit>
      <Label htmlFor="contact-page-name">
        <span>
          {config.name || 'Name'}
          {config.nameRequired && '*'}
        </span>
        <InputContact type="text" name="contact-page-name" id="contact-page-name" required={config.nameRequired} />
      </Label>
      <Label htmlFor="contact-page-phone">
        <span>
          {config.phone || 'Phone'}
          {config.phoneRequired && '*'}
        </span>
        <InputContact type="tel" name="contact-page-phone" id="contact-page-phone" required={config.phoneRequired} />
      </Label>
    </FormFieldSplit>
    <FormFieldSplit>
      <Label htmlFor="contact-page-email">
        <span>
          {config.email || 'Email'}
          {config.emailRequired && '*'}
        </span>
        <InputContact type="email" name="contact-page-email" id="contact-page-email" required={config.emailRequired} />
      </Label>
      <Label htmlFor="contact-page-eventDate">
        <span>
          {config.eventDate || 'Event Date'}
          {config.eventDateRequired && '*'}
        </span>
        <InputContact
          type="text"
          name="contact-page-eventDate"
          id="contact-page-eventDate"
          required={config.eventDateRequired}
        />
      </Label>
    </FormFieldSplit>
    <FormFieldSplit>
      <Label htmlFor="contact-page-referral">
        <span>How did you hear about us?</span>
        <select name="contact-page-referral" id="contact-page-referral" style={{ marginTop: 24 }}>
          <option value="friend">Friend</option>
          <option value="Friend">Family</option>
          <option value="Friend">Another Blog</option>
          <option value="Friend">Instagram</option>
          <option value="Friend">Facebook</option>
          <option value="Friend">Our Blog</option>
          <option value="Friend">Other</option>
        </select>
      </Label>
      <Label htmlFor="contact-page-other-referral">
        <span>Care to share who?</span>
        <InputContact
          type="text"
          name="contact-page-referral-other"
          id="contact-page-referral-other"
          required={config.referralSource}
        />
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
      <Label htmlFor="contact-page-additional-info">
        <span>
          {config.additionalInfo || 'Additional Information'}
          {config.additionalInfoRequired && '*'}
        </span>
        <TextFieldContact
          name="contact-page-additional-info"
          id="contact-page-additional-info"
          rows="5"
          required={config.additionalInfoRequired}
        />
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
