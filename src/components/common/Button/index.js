import styled from 'styled-components'

// a, button, [role="button"], input, label, select, textarea {
//   touch-action: manipulation;
// }
// .btn, .btn--secondary, .site-footer__item-inner--newsletter form .input-group__btn .newsletter__submit, .shopify-payment-button .shopify-payment-button__button--unbranded
export const Button = styled.button`
  position: relative;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  width: auto;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 0.7rem 2rem;
  background-color: var(--primary-color);
  color: var(--text-inverse-color);
  font-weight: 300;
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  white-space: normal;
  margin: 10px 0 0 0;
  transition: all 0.2s ease-out;

  :after {
    position: absolute;
    left: 11px;
    bottom: -7px;
    content: '';
    border: 2px solid var(--primary-color);
    display: inline-block;
    border-left: 0;
    border-top: 0;
    border-bottom-right-radius: 12px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    transition: all 0.2s ease-out;
  }

  :hover {
    transform: translate(6px, 6px);
    color: var(--text-inverse-color);
    background-color: var(--primary-color);
    :after {
      transform: translate(-6px, -6px);
    }
  }
`

// .btn:after, .btn--secondary:after, .site-footer__item-inner--newsletter form .input-group__btn .newsletter__submit:after, .shopify-payment-button .shopify-payment-button__button--unbranded:after
// .btn--secondary:not([disabled]):hover,
export const ButtonOutline = styled(Button)`
  font-weight: 400;
  background-color: transparent;
  border-width: 2px;
  color: var(--primary-color);
  border-color: var(--primary-color);

  :after {
    border-color: var(--primary-color);
  }

  :hover {
    background-color: transparent;
    color: var(--primary-color);
    border-color: var(--primary-color);
    :after {
      transform: translate(-5px, -5px);
      border-bottom-right-radius: 8px;
    }
  }
`

export const ButtonSimple = styled.button`
  cursor: pointer;
  text-align: center;
  border-radius: 30px;
  padding: 0.7rem 2.5rem;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff;
  background: ${({ theme }) => theme.colors.primary || 'slateblue'};

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }

  ${({ secondary }) =>
    secondary &&
    `
		background: #001F3F;
	`}
`
