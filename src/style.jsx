import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #5270FB;
    --secondary-color: #37427b; //rgba(82, 112, 251, 0.39);
    --bg-primary: #121214;
    --bg-secondary: #26252A;
    --bg-tartiary: #36353C;
    --bg-third: #6c757d;
    --txt-primary: #8F8D98;
    --txt-secondary: #f5f5f547;
    --txt-title: #cecece;
    --success-color: #28a745;
    --danger-color: #c23846;
    --warning-color: #ffc107;
    --info-color: #17a2b8;
    --light-color: #f8f9fa;
    --dark-color: #343a40;
    --button-txt: #fff;

    --msg-send: #353342;
    --txt-solid: #c3c6e0;
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
padding: 0 20px 60px 0;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--bg-secondary);
  width: fit-content;
  height: fit-content;
  border-radius: 32px;
  gap: 40px;
  padding: 30px;

  /* Conditionally apply styles based on the mobile prop */
  width: ${(props) => (props.mobile ? '100%' : 'auto')};
  max-width: ${(props) => (props.mobile ? '400px' : '1200px')};

  @media (max-width: 768px) {
    width: ${(props) => (props.mobile ? '100%' : 'auto')};
    max-width: ${(props) => (props.mobile ? '400px' : 'none')};
  }
`;

export const Gap = styled.div`
  display:flex;
  flex-wrap:wrap;
  // padding: 50px 0 0 0;
  gap:20px;
  justify-content:center;
  @media(width > 768px){
    flex-direction:row;
  }
`
