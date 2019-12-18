import { createGlobalStyle } from 'styled-components'
import { lighten } from 'polished'

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* Added to Fix Footer to bottom of viewport */
  html, body {
    height: 100%;
  }
  .siteRoot {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .siteContent {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
  }
  footer {
    width: 100%;
  }

  /* End Fix to Place Footer on Bottom of Viewport */

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  @media screen and (min-width: 35em) {
    html {
      margin-right: calc(-100vw + 100%);
      overflow-x: hidden;
    }
  }

  /* Typography */
  h1, h2, h3 {
    font-weight: 600;
    line-height: 1.25;
    margin: 0 0 1rem 0;
    text-transform: capitalize;
  }

  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.25em;
  }
  h3 {
    font-size: 1em;
  }

  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
  }

  a {
    transition: 0.25s;
  }

  del {
    text-decoration: line-through;
  }
  strong {
    font-weight: 600;
  }
  em {
    font-style: italic;
  }

  ul, ol {
    margin: 0 0 2em 0;
  }
  ol, ul, li {
    list-style: none;
  }
  li {
    line-height: 1.25;
  }

  pre {
    border-radius: 2px;
    color: ${props => lighten(.1, props.theme.colors.light)};
    margin: 0 0 2em 0;
    background: ${props => props.theme.colors.dark};
    span {
      background: inherit !important;
    }
  }

  hr {
    border: none;
    border-top: 1px solid ${props => props.theme.colors.highlight};
    margin: 0 0 2em;
    width: 100%;
  }

  blockquote, q {
    quotes: none;
    font-style: italic;
    border-left: 4px solid ${props => props.theme.colors.highlight};
    padding: 0 0 0 0.5em;
  }

  blockquote::before, blockquote::after,
  q::before, q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.white};
    line-height: 1;
    font-size: 100%;
    font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

  button,
  input {
    font-family: inherit;
    font-size: inherit;
    background: none;
    border: none;
    outline: none;
    appearance: none;
    border-radius: 0;
    resize: none;
    &:focus {
      outline: none;
    }
    &:invalid {
      box-shadow: none;
    }
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #282828;
    border: 0px none #000000;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #8EA68D;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #8EA68D;
  }
  ::-webkit-scrollbar-track {
    background: #f5f5f5;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track:hover {
    background: #f5f5f5;
  }
  ::-webkit-scrollbar-track:active {
    background: #f5f5f5;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`
export default GlobalStyle
