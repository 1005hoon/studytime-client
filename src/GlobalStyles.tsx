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
    font-family: 'Noto Sans KR', MalgunGothic, '맑은 고딕', '돋움', Dotum,
      AppleGothic, Sans-serif, Arial;
  }

  body {
    outline: none;
  }

  .Modal {
    position: absolute;
    padding: 3rem 5rem 2rem;
    top: 50%;
    left: 50%;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 64rem;
    max-width: 98rem;
    max-height: 80rem;
    min-height: 30rem;
    transform: translate(-50%, -50%);
    background-color: #282b30;
    color: #fff;
    border-radius: 15px;
  }

  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 999;
  }
`}`;
