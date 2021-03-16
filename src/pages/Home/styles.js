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

   nav {
     align-self: flex-end;
   }
`;