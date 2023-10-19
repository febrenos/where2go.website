import styled from "styled-components";

// width:100%;
// display: grid;
// grid-template-columns: repeat(2, 1fr);
// gap: 60px;
// justify-content: center;

export const Content = styled.div`
    width:100%;
    display: flex;
    gap: 60px;
    justify-content: center;
    @media(width < 768px){
        padding:20px;
    }
`

export const Apresentation = styled.div`
    display: flex;
    flex-direction:column;
    align-items: flex-end;
    @media(width < 768px){
        display:none;
    }
`