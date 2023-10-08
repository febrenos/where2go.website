import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg-primary: #121214;
    --bg-secondary: #26252A;
    --bg-tartiary: #36353C;
    --bg-third: #6c757d;
    --primary-color: #5270FB;
    --secondary-color: rgba(82, 112, 251, 0.39);
    --txt-primary: #8F8D98;
    --txt-secondary: #f5f5f547;
    --txt-title: #fff;
    --success-color: #28a745;
    --danger-color: #c23846;
    --warning-color: #ffc107;
    --info-color: #17a2b8;
    --light-color: #f8f9fa;
    --dark-color: #343a40;
    --button-txt: #fff;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  html, html:hover {
    background-color: var(--bg-primary);
    color: #ffffffd7;
    font-family: system-ui, monospace, 'Gill Sans';
    transition: 1s;

    @media(width > 768px) {
      padding: 10px 0 0 10px;
    }
  }

  img, a {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6, p {
    color: var(--txt-primary);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
  }

  p {
    font-size: 17px;
  }

  ::-webkit-scrollbar {
    width: 16px;
    border-radius: 8px;
    padding: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--secondary-color);
    border-radius: 8px;
    border: 4px solid var(--bg-secondary);
  }

  ::-webkit-scrollbar-track {
    background: var(--bg-secondary);
    border-radius: 8px;
  }
  .contentOpen{
    transition: .6s;
    padding-left: 65px;
    @media(width < 768px){
        padding: 23px 0 0 0;
    }
}
.contentClose{
    transition: .6s;
    padding-left: 220px;
    @media(width < 768px){
        padding: 23px 0 0 0;
    }
}
`;

export const StyledContentLogged = styled.div`
padding: 0 20px 0 0;
& > *{
  padding: 0 0 40px 0;
}
@media(width < 768px){
  padding: 0 20px 20px 20px;
  flex-direction:column;
  justify-content:center;
}
`;

export const BackgroundCard = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
background-color:var(--bg-secondary);
width:fit-content;
height: fit-content;
border-radius:32px;
padding:30px;
@media(width < 768px){
    width:100%;
}
`

export const Gap = styled.div`
  display:flex;
  flex-wrap:wrap;
  padding: 50px 0 0 0;
  gap:20px;
  @media(width > 768px){
    flex-direction:row;
    justify-content:center;
  }
`
