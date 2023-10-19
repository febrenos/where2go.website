import styled from "styled-components";

export const ImgProfile = styled.img`
 width:130px;
`
export const Center = styled.div`
  display: flex;
  justify-content: center;
  flex-direction:column;
  align-items:center;
  gap:20px;
`;
export const Flex = styled.div`
  // display: flex;
  // gap:20px;

  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  gap:20px;
  @media(width < 768px){
    flex-direction:row;
    justify-content:center;
  }
`;

export const ContentGrid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
grid-template-rows: repeat(auto-fill, minmax(70px, 1fr));
grid-auto-rows: 70px;
gap: 10px;
`;

export const BigBox = styled.div`
border-radius: 15px;
background-color: var(--bg-secondary);
grid-column: span 3; /* Span 2 columns */
grid-row: span 3; /* Span 3 rows */
display: flex;
flex-direction:column;
gap:10px;
align-items: center;
justify-content: center;
`;

export const MediumBox = styled.div`
border-radius: 15px;
background-color: var(--bg-secondary);
grid-column: span 2;
grid-row: span 2;
display: flex;
flex-direction:column;
gap:10px;
align-items: center;
justify-content: center;
`;

export const SmallBox = styled.div`
display: flex;
justify-content: center;
border-radius:15px;
background-color: var(--bg-secondary);
`;

