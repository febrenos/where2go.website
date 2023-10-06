import styled from "styled-components";

export const ImgPerfil = styled.img`
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
