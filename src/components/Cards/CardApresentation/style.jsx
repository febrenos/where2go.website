import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: 16px;
  color: #333;
  line-height: 1.5;
  background: #403a60;
  width:100%;
  height:250px;
  border-radius: 20px;
  overflow: hidden;
  align-items:center;
  padding: 0 0 30px 0;
`;

export const CardHeaderLeft = styled.div`
top: 0px;
width: 25px;
border-top-right-radius: 25px;
box-shadow: 0 -25px 0 0 #383150;
background: #403a60;
`;

export const CardHeader = styled.div`
width:20%;
text-align: center;
color: #fff;
width: auto;
font-weight: bold;
padding: 10px 15px;
background: #383150;
border-radius: 0 0 20px 20px;
`;

export const CardHeaderRight = styled.div`
top: 0px;
height: 50px;
width: 25px;
border-top-left-radius: 25px;
box-shadow: 0 -25px 0 0 #383150;
background: #403a60;
`;

export const Align = styled.div`
display: flex;
`;

export const Content = styled.div`
display: flex;
height:100%;
flex-direction:column;
align-items: center;
text-align: center;
justify-content: center;
`;


// export default {
//   Card: styled.div`
//     font-size: 16px;
//     color: #333;
//     line-height: 1.5;
//   `
// };
