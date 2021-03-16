import styled from 'styled-components';

export const Container = styled.div`
   padding: 20px;

   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;

   p {
        font-size: 24px;
        color: #E6D5B8;
        text-align: center;
        flex: 1;
      }
`;

export const Header = styled.header`
  min-width: 360px;
  width: 100%;
  nav {
      height: 50px;

      display: flex;
      align-items: center;
      justify-content: center;

      p {
        font-size: 24px;
        color: #E6D5B8;
        text-align: center;
        flex: 1;
      }
  }
`;

export const Table = styled.table`
  width: 100%;

  font-size: 24px;

  td {
    padding: 10px;
    color: #1F6F8B;
  }
  
  tr:nth-child(-n + 3) > td {
      color: #99A8B2;
  }
 
`;