import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  html {
    font-family: "Lato", "Lucida Grande", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    overflow-x: hidden;
    max-width: 100vw;
    height: -webkit-fill-available;

    :root {
      --serif-font: 'Crimson Text', "Lucida Grande", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      --sans-font: "Lato", "Lucida Grande", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      --quote-font: 'Crimson Pro', 'Crimson Text', "Lucida Grande", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";;
      --primary-color: ${({ theme }) => theme.colors.primary || '#694a86'};
      --primaryInverse-color: ${({ theme }) => theme.colors.primaryInverse || '#694a86'};
      --primaryLighter-color: ${({ theme }) => theme.colors.primaryLighter || '#7c6194'};
      --secondary-color: ${({ theme }) => theme.colors.secondary || '#8D426C'};
      --accent-color: ${({ theme }) => theme.colors.accent || '#BF9000'};
      --accentLight-color: ${({ theme }) => theme.colors.accentLight || '#FBB040'};
      --accentLightest-color: ${({ theme }) => theme.colors.accentLightest || '#E9CB99'};
      --text-color: ${({ theme }) => theme.colors.text || '#414042'};
      --textInverse-color: ${({ theme }) => theme.colors.textInverse || '#fff'};
      --textLight-color: ${({ theme }) => theme.colors.textLight || '#fff'};
      --heading-color: ${({ theme }) => theme.colors.heading || '#212121'};
      --subheading-color: ${({ theme }) => theme.colors.subheading || '#565656'};
      --disabled-color: ${({ theme }) => theme.colors.disabled || '#707070'};
      --link-color: ${({ theme }) => theme.colors.link || '#BF9000'};
      --bg-color: ${({ theme }) => theme.colors.bg || '#fff'};
      --bgDark-color: ${({ theme }) => theme.colors.bgDark || '#e6e6e6'};
      --error-color: ${({ theme }) => theme.colors.error || '#ff4136'};
    }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    main,
    menu,
    nav,
    section,
    summary {
      display: block;
    }
    audio,
    canvas,
    progress,
    video {
      display: inline-block;
    }
    audio:not([controls]) {
      display: none;
      height: 0;
    }
    progress {
      vertical-align: baseline;
    }
    [hidden],
    template {
      display: none;
    }
    a {
      background-color: transparent;
      -webkit-text-decoration-skip: objects;
    }
    a:active,
    a:hover {
      outline-width: 0;
    }
    abbr[title] {
      border-bottom: none;
      text-decoration: underline;
      text-decoration: underline dotted;
    }
    b,
    strong {
      font-weight: inherit;
      font-weight: bolder;
    }
    dfn {
      font-style: italic;
    }
    h1 {
      font-size: 2em;
      margin: 0.67em 0;
    }
    mark {
      background-color: #ff0;
      color: #000;
    }
    small {
      font-size: 80%;
    }
    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }
    sub {
      bottom: -0.25em;
    }
    sup {
      top: -0.5em;
    }
    img {
      border-style: none;
    }
    svg:not(:root) {
      overflow: hidden;
    }
    code,
    kbd,
    pre,
    samp {
      font-family: monospace, monospace;
      font-size: 1em;
    }
    figure {
      margin: 1em 40px;
    }
    hr {
      box-sizing: content-box;
      height: 0;
      overflow: visible;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
      font: inherit;
      margin: 0;
    }
    optgroup {
      font-weight: 700;
    }
    button,
    input {
      overflow: visible;
    }
    button,
    select {
      text-transform: none;
    }
    [type='reset'],
    [type='submit'],
    button,
    html [type='button'] {
      -webkit-appearance: button;
    }
    [type='button']::-moz-focus-inner,
    [type='reset']::-moz-focus-inner,
    [type='submit']::-moz-focus-inner,
    button::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }
    [type='button']:-moz-focusring,
    [type='reset']:-moz-focusring,
    [type='submit']:-moz-focusring,
    button:-moz-focusring {
      outline: 1px dotted ButtonText;
    }
    fieldset {
      border: 1px solid silver;
      margin: 0 2px;
      padding: 0.35em 0.625em 0.75em;
    }
    legend {
      box-sizing: border-box;
      color: inherit;
      display: table;
      max-width: 100%;
      padding: 0;
      white-space: normal;
    }
    textarea {
      overflow: auto;
    }
    [type='checkbox'],
    [type='radio'] {
      box-sizing: border-box;
      padding: 0;
    }
    [type='number']::-webkit-inner-spin-button,
    [type='number']::-webkit-outer-spin-button {
      height: auto;
    }
    [type='search'] {
      -webkit-appearance: textfield;
      outline-offset: -2px;
    }
    [type='search']::-webkit-search-cancel-button,
    [type='search']::-webkit-search-decoration {
      -webkit-appearance: none;
    }
    ::-webkit-input-placeholder {
      color: inherit;
      opacity: 0.54;
    }
    ::-webkit-file-upload-button {
      -webkit-appearance: button;
      font: inherit;
    }
    html {
      font: 112.5%/1.45em georgia, serif;
      box-sizing: border-box;
      overflow-y: scroll;
    }
    * {
      box-sizing: border-box;
    }
    *:before {
      box-sizing: border-box;
    }
    *:after {
      box-sizing: border-box;
    }
    ${
      '' /* img {
      max-width: 100%;
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    } */
    }
    h1 {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      color: inherit;
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 2.25rem;
      line-height: 1.1;
    }
    h2 {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      color: inherit;
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 1.62671rem;
      line-height: 1.1;
    }
    h3 {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      ${'' /* color: inherit; */}
      font-family: 'Crimson Text', "Lucida Grande", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      color: var(--accent-color);
      ${'' /* font-weight: bold; */}
      font-weight: 300;
      text-rendering: optimizeLegibility;
      ${'' /* font-size: 1.38316rem; */}
      font-size: 2.4rem;
      line-height: 1.1;
    }
    h4 {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      color: inherit;
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 1rem;
      line-height: 1.1;
    }
    h5 {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      color: inherit;
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 0.85028rem;
      line-height: 1.1;
    }
    h6 {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      color: inherit;
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 0.78405rem;
      line-height: 1.1;
    }
    hgroup {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    ul {
      margin-left: 1.45rem;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      list-style-position: outside;
      list-style-image: none;
    }
    ol {
      margin-left: 1.45rem;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      list-style-position: outside;
      list-style-image: none;
    }
    dl {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    dd {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    p {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    figure {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    pre {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      font-size: 0.85rem;
      line-height: 1.42;
      background: hsla(0, 0%, 0%, 0.04);
      border-radius: 3px;
      overflow: auto;
      word-wrap: normal;
      padding: 1.45rem;
    }
    table {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
      font-size: 1rem;
      line-height: 1.45rem;
      border-collapse: collapse;
      width: 100%;
    }
    fieldset {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    blockquote {
      margin-left: 1.45rem;
      margin-right: 1.45rem;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    form {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    noscript {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    iframe {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    hr {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: calc(1.45rem - 1px);
      background: hsla(0, 0%, 0%, 0.2);
      border: none;
      height: 1px;
    }
    address {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      padding-top: 0;
      margin-bottom: 1.45rem;
    }
    b {
      font-weight: bold;
    }
    strong {
      font-weight: bold;
    }
    dt {
      font-weight: bold;
    }
    th {
      font-weight: bold;
    }
    li {
      margin-bottom: calc(1.45rem / 2);
    }
    ol li {
      padding-left: 0;
    }
    ul li {
      padding-left: 0;
    }
    li > ol {
      margin-left: 1.45rem;
      margin-bottom: calc(1.45rem / 2);
      margin-top: calc(1.45rem / 2);
    }
    li > ul {
      margin-left: 1.45rem;
      margin-bottom: calc(1.45rem / 2);
      margin-top: calc(1.45rem / 2);
    }
    blockquote *:last-child {
      margin-bottom: 0;
    }
    li *:last-child {
      margin-bottom: 0;
    }
    p *:last-child {
      margin-bottom: 0;
    }
    li > p {
      margin-bottom: calc(1.45rem / 2);
    }
    code {
      font-size: 0.85rem;
      line-height: 1.45rem;
    }
    kbd {
      font-size: 0.85rem;
      line-height: 1.45rem;
    }
    samp {
      font-size: 0.85rem;
      line-height: 1.45rem;
    }
    abbr {
      border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
      cursor: help;
    }
    acronym {
      border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
      cursor: help;
    }
    abbr[title] {
      border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
      cursor: help;
      text-decoration: none;
    }
    thead {
      text-align: left;
    }
    td,
    th {
      text-align: left;
      border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
      font-feature-settings: 'tnum';
      -moz-font-feature-settings: 'tnum';
      -ms-font-feature-settings: 'tnum';
      -webkit-font-feature-settings: 'tnum';
      padding-left: 0.96667rem;
      padding-right: 0.96667rem;
      padding-top: 0.725rem;
      padding-bottom: calc(0.725rem - 1px);
    }
    th:first-child,
    td:first-child {
      padding-left: 0;
    }
    th:last-child,
    td:last-child {
      padding-right: 0;
    }
    tt,
    code {
      background-color: hsla(0, 0%, 0%, 0.04);
      border-radius: 3px;
      font-family: 'SFMono-Regular', Consolas, 'Roboto Mono', 'Droid Sans Mono',
        'Liberation Mono', Menlo, Courier, monospace;
      padding: 0;
      padding-top: 0.2em;
      padding-bottom: 0.2em;
    }
    pre code {
      background: none;
      line-height: 1.42;
    }
    code:before,
    code:after,
    tt:before,
    tt:after {
      letter-spacing: -0.2em;
      content: ' ';
    }
    pre code:before,
    pre code:after,
    pre tt:before,
    pre tt:after {
      content: '';
    }
    @media only screen and (max-width: 480px) {
      html {
        font-size: 100%;
      }
    }

    

    ${
      '' /* // get variable from inline style
            element.style.getPropertyValue("--my-var");

            // get variable from wherever
            getComputedStyle(element).getPropertyValue("--my-var");

            // set variable on inline style
            element.style.setProperty("--my-var", jsVar + 4); */
    }

    body {
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      width: 100%;
      max-width: 100vw;
      min-height: 100vh;
      min-height: -webkit-fill-available;
      font-family: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      ${'' /* color: ${({ theme }) => theme.colors.text || 'hsla(0, 0%, 0%, 0.8)'}; */}
      ${'' /* background-color: ${({ theme }) => theme.colors.bg || '#fff'}; */}
      color: var(--text-color);
      background-color: var(--bg-color);
      font-weight: normal;
      word-wrap: break-word;
      font-kerning: normal;
      -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
      ${'' /* https://css-tricks.com/simplified-fluid-typography/ */}
      ${'' /* font-size: clamp(100%, 1rem + 2vw, 24px); */}
    }

    font-size: min(max(1rem, 4vw), 22px);

    a {
      text-decoration: none;
    }

    input, select, textarea, button {
      &:focus {
        outline: none;
      }
    }
  }
`
