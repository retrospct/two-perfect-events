import React from 'react'
// import ReCAPTCHA from 'react-google-recaptcha'
import { Button, InputContact, TextFieldContact } from 'components/common'
import { FormField, FormFieldSplit, Label, ErrorMessage } from './styles'

export const ContactForm = ({ config, contrast = false }) => (
  <form
    name="contact"
    method="post"
    data-netlify="true"
    data-netlify-recaptcha="true"
    netlify-honeypot="bot-field"
    action="/success"
    className="needs-validation"
  >
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="form-name" value="contact" />
    <FormFieldSplit>
      <Label htmlFor="contact-name" contrast={contrast}>
        <span>
          {config.nameLabel || 'Name'}
          {config.nameRequired && '*'}
        </span>
        <InputContact
          type="text"
          name="contact-name"
          id="contact-name"
          // placeholder="Your Name"
          required={config.nameRequired}
          contrast={contrast}
        />
      </Label>
      <Label htmlFor="contact-phone" contrast={contrast}>
        <span>
          {config.phoneLabel || 'Phone'}
          {config.phoneRequired && '*'}
        </span>
        <InputContact
          type="tel"
          name="contact-phone"
          id="contact-phone"
          // placeholder="Your Phone"
          required={config.phoneRequired}
          contrast={contrast}
        />
      </Label>
    </FormFieldSplit>
    <FormFieldSplit>
      <Label htmlFor="contact-email" contrast={contrast}>
        <span>
          {config.emailLabel || 'Email'}
          {config.emailRequired && '*'}
        </span>
        <InputContact
          type="email"
          name="contact-email"
          id="contact-email"
          // placeholder="Your Email"
          required={config.emailRequired}
          contrast={contrast}
        />
      </Label>
      <Label htmlFor="contact-eventDate" contrast={contrast}>
        <span>
          {config.eventDateLabel || 'Event Date'}
          {config.eventDateRequired && '*'}
        </span>
        <InputContact
          type="text"
          name="contact-eventDate"
          id="contact-eventDate"
          placeholder="mm/dd/yyyy"
          required={config.eventDateRequired}
          contrast={contrast}
        />
      </Label>
    </FormFieldSplit>
    <FormFieldSplit>
      <Label htmlFor="contact-referral" contrast={contrast}>
        <span>
          {config.referralLabel || 'How did you hear about us?'}
          {config.referralRequired && '*'}
        </span>
        <select name="contact-referral" id="contact-referral" style={{ marginTop: 28 }}>
          {config.referralOptions.map((option) => (
            <option key={option.id} value={option?.referralType?.toLowerCase()}>
              {option.referralType}
            </option>
          ))}
        </select>
      </Label>
      {config.referralDetailEnabled && (
        <Label htmlFor="contact-referral-detail" contrast={contrast}>
          <span>
            {config.referralDetailLabel || 'Care to share the specific source?'}
            {config.referralDetailRequired && '*'}
          </span>
          <InputContact
            type="text"
            name="contact-referral-detail"
            id="contact-referral-detail"
            // placeholder="(e.g. Instagram post, my friend Mary, etc.)"
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
      <Label htmlFor="contact-additional-info" contrast={contrast}>
        <span>
          {config.additionalInformationLabel || 'Additional Information'}
          {config.additionalInformationRequired && '*'}
        </span>
        <TextFieldContact
          name="contact-additional-info"
          id="contact-additional-info"
          rows="6"
          // placeholder="Anything else you want to share?"
          required={config.additionalInformationRequired}
          contrast={contrast}
        />
      </Label>
    </FormField>
    {/* <ErrorMessage>Error placeholder</ErrorMessage> */}
    <div netlify-recaptcha="true"></div>
    <FormField>
      <Button type="submit" id="contact-submit">
        Submit
      </Button>
    </FormField>
    {/* <FormField>
      <ReCAPTCHA sitekey={process.env.GATSBY_RECAPTCHA_KEY} />
    </FormField> */}
  </form>
)

// import React from 'react'
// import ReCAPTCHA from 'react-google-recaptcha'
// import { Button, InputContrast, TextFieldContrast } from 'components/common'
// import { FormField, FormFieldSplit, Label, ErrorMessage } from './styles'

// export const ContactForm = ({ config }) => (
//   <form
//     name="contact"
//     method="POST"
//     data-netlify="true"
//     data-netlify-recaptcha="true"
//     netlify-honeypot="bot-field"
//     class="needs-validation"
//     action="/success"
//   >
//     <input type="hidden" name="bot-field" />
//     <input type="hidden" name="form-name" value="contact" />
//     <FormFieldSplit>
//       <Label htmlFor="contact-name">
//         <span>
//           {config.name || 'Name'}
//           {config.nameRequired && '*'}
//         </span>
//         <InputContrast type="text" name="contact-name" id="contact-name" required={config.nameRequired} />
//       </Label>
//       <Label htmlFor="contact-phone">
//         <span>
//           {config.phone || 'Phone'}
//           {config.phoneRequired && '*'}
//         </span>
//         <InputContrast type="tel" name="contact-phone" id="contact-phone" required={config.phoneRequired} />
//       </Label>
//     </FormFieldSplit>
//     <FormFieldSplit>
//       <Label htmlFor="contact-email">
//         <span>
//           {config.email || 'Email'}
//           {config.emailRequired && '*'}
//         </span>
//         <InputContrast type="email" name="contact-email" id="contact-email" required={config.emailRequired} />
//       </Label>
//       <Label htmlFor="contact-eventDate">
//         <span>
//           {config.eventDate || 'Event Date'}
//           {config.eventDateRequired && '*'}
//         </span>
//         <InputContrast
//           type="text"
//           name="contact-eventDate"
//           id="contact-eventDate"
//           required={config.eventDateRequired}
//         />
//       </Label>
//     </FormFieldSplit>
//     <FormFieldSplit>
//       <Label htmlFor="contact-referral">
//         <span>How did you hear about us?</span>
//         <select name="contact-referral" id="contact-referral" style={{ marginTop: 24 }}>
//           <option value="friend">Friend</option>
//           <option value="Friend">Family</option>
//           <option value="Friend">Another Blog</option>
//           <option value="Friend">Instagram</option>
//           <option value="Friend">Facebook</option>
//           <option value="Friend">Our Blog</option>
//           <option value="Friend">Other</option>
//         </select>
//       </Label>
//       <Label htmlFor="contact-other-referral">
//         <span>Care to share who?</span>
//         <InputContrast
//           type="text"
//           name="contact-referral-other"
//           id="contact-referral-other"
//           required={config.referralSource}
//         />
//       </Label>
//     </FormFieldSplit>
//     {/* <FormField>
//     <Label>Your Role: <select name="role[]" multiple>
//       <option value="leader">Leader</option>
//       <option value="follower">Follower</option>
//     </select></Label>
//   </FormField> */}
//     {/* <p>Date of event if known (placeholder)</p> */}
//     <FormField>
//       <Label htmlFor="contact-additional-info">
//         <span>
//           {config.additionalInfo || 'Additional Information'}
//           {config.additionalInfoRequired && '*'}
//         </span>
//         <TextFieldContrast
//           name="additional-info"
//           id="contact-additional-info"
//           rows="5"
//           required={config.additionalInfoRequired}
//         />
//       </Label>
//     </FormField>
//     {/* <ErrorMessage>Error placeholder</ErrorMessage> */}
//     <FormField>
//       <Button type="submit" id="input-submit">
//         Submit
//       </Button>
//     </FormField>
//     <FormField>
//       <ReCAPTCHA sitekey={process.env.GATSBY_RECAPTCHA_KEY} />
//     </FormField>
//   </form>
// )

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
// <input type="text" name="name" id="input-name" className="form-control" placeholder="Your Name" required />
// <input type="email" name="email" id="input-email" className="form-control" placeholder="Email address" title="Email (format: your@example.com)" required  />
//     <div className="invalid-feedback">
//       Please enter a valid email address.
//     </div>
//     <IntlTelInput fieldId="phonenum" fieldName="phonenum" containerClassName="intl-tel-input" inputClassName="form-control" defaultCountry="tr"/>
//   </div>
//   <div className="half right cf">
// <textarea name="message" id="input-message" rows="4" clsassName="form-control"  placeholder="Message"></textarea>
//   </div>
//   <div netlify-recaptcha></div>
//   <input type='submit' id="input-submit" className="btn btn-primary btn-lg btn-block" value="Send Message"
//   />
// </form>
