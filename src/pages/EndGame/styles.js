import styled from 'styled-components';

export const Container = styled.div`
   height: 100vh;
   max-height: -webkit-fill-available;
   max-width: 360px;

   padding: 20px;

   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;

   color: #E6D5B8;

  h1 {
    font-size: 48px; 
  }

  .score-container {
     text-align: center;
     span {
       font-size: 18px;
     }
     p {
      font-size: 96px;
     }
  }
 

  input {
    width:  320px;
    height: 80px;

    border: 3px solid #1F6F8B;
    border-radius: 10px;

    background: none;

    color: #99A8B2;
    font-size: 24px;

    padding: 0px 20px;
  }
  
`;

export const Header = styled.header`
      width: 100%;
      height: 50px;

      display: flex;
      align-items: center;
      justify-content: flex-end;
`;
