import styled, { createGlobalStyle } from 'styled-components/macro';

export const LockBody = createGlobalStyle`
  body { overflow: hidden }
`;

export const ReleaseBody = createGlobalStyle`
  body { overflow: visible }
`;

export const Spinner = styled.div`
  position: fixed;
  left: 250px;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 10;

  :after {
    content: '';
    position: absolute;
    top: 50%;
    left: 45%;
    background-image: url(/images/loader.png);
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: -150px;
    margin-left: -75px;
    width: 70px;
    height: 70px;
    animation-name: spin;
    animation-duration: 600ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  @-ms-keyframes spin {
    from {
      -ms-transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
    }
  }
  @-moz-keyframes spin {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
