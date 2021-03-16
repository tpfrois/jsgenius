import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
    background:  none;
    border:  none;
  }

  body { 
    background-color: #1C2B2D;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  --primary-blue: #1f6f8b;
  --primary-yellow: #E6D5B8;
  --primary-grey: #99A8B2;
`;
