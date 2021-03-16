import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
   max-height: -webkit-fill-available;
   max-width: 360px;
   padding: 20px;

   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
`;

export const Display = styled.p`
  width: 150px;
  height: 150px;

  margin: 35px 0px;

  border-radius: 5px;
  border: 3px solid #E6D5B8;

  font-size: 96px;
  color: #E6D5B8;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const KeyPad = styled.div`
  width: 320px;
  height: 320px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;

  grid-gap:3px;
`;

export const Key = styled.button`
 box-sizing: content-box;
    width: 100%;
    height: 100%;
    
    font-size: 64px;
    color: #99A8B2;
    background: transparent;

    border: 3px solid #1F6F8B;

    &:disabled {
      cursor: not-allowed;
    }

    &:hover {
      background: #1F6F8B;
    }
`;