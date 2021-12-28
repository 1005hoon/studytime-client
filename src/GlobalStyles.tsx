import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`${css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
  }

  html {
    font-size: 62.5%;
    background-color: #282b30;
    color: #fff;
  }

  body {
    font-family: 'Noto Sans KR', MalgunGothic, '맑은 고딕', '돋움', Dotum,
      AppleGothic, Sans-serif, Arial;
    outline: none;
  }
`}`;
