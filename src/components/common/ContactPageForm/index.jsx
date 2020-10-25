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
      <Label htmlFor="contact-page-name" contrast>
        <span>
          {config.nameLabel || 'Name'}
          {config.nameRequired && '*'}
        </span>
        <InputContact
          type="text"
          name="contact-page-name"
          id="contact-page-name"
          required={config.nameRequired}
          contrast
        />
      </Label>
      <Label htmlFor="contact-page-phone" contrast>
        <span>
          {config.phoneLabel || 'Phone'}
          {config.phoneRequired && '*'}
        </span>
        <InputContact
          type="tel"
          name="contact-page-phone"
          id="contact-page-phone"
          required={config.phoneRequired}
          contrast
        />
      </Label>
    </FormFieldSplit>
    <FormFieldSplit>
      <Label htmlFor="contact-page-email" contrast>
        <span>
          {config.emailLabel || 'Email'}
          {config.emailRequired && '*'}
        </span>
        <InputContact
          type="email"
          name="contact-page-email"
          id="contact-page-email"
          required={config.emailRequired}
          contrast
        />
      </Label>
      <Label htmlFor="contact-page-eventDate" contrast>
        <span>
          {config.eventDateLabel || 'Event Date'}
          {config.eventDateRequired && '*'}
        </span>
        <InputContact
          type="text"
          name="contact-page-eventDate"
          id="contact-page-eventDate"
          required={config.eventDateRequired}
          contrast
        />
      </Label>
    </FormFieldSplit>
    <FormFieldSplit>
      <Label htmlFor="contact-page-referral" contrast>
        <span>
          {config.referralLabel || 'How did you hear about us?'}
          {config.referralRequired && '*'}
        </span>
        <select name="contact-page-referral" id="contact-page-referral" style={{ marginTop: 28 }}>
          {config.referralOptions.map((option) => (
            <option key={option.id} value={option?.referralType?.toLowerCase()}>
              {option.referralType}
            </option>
          ))}
        </select>
      </Label>
      {config.referralDetailEnabled && (
        <Label htmlFor="contact-page-referral-detail" contrast>
          <span>
            {config.referralDetailLabel || 'Care to share the specific source?'}
            {config.referralDetailRequired && '*'}
          </span>
          <InputContact
            type="text"
            name="contact-page-referral-detail"
            id="contact-page-referral-detail"
            required={config.referralDetail}
            contrast
          />
          {config.referralHelptextEnabled && (
            <span style={{ fontSize: '0.8rem' }}>
              <em>{config.referralHelptext || 'This info really helps manage our efforts as a small business.'}</em>
            </span>
          )}
        </Label>
      )}
    </FormFieldSplit>
    {/* <FormField>
    <Label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></Label>
  </FormField> */}
    {/* <p>Date of event if known (placeholder)</p> */}
    <FormField>
      <Label htmlFor="contact-page-additional-info" contrast>
        <span>
          {config.additionalInformationLabel || 'Additional Information'}
          {config.additionalInformationRequired && '*'}
        </span>
        <TextFieldContact
          name="contact-page-additional-info"
          id="contact-page-additional-info"
          rows="5"
          required={config.additionalInformationRequired}
          contrast
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
