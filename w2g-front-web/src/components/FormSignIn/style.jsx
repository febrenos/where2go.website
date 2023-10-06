import styled from "styled-components";

export const All = styled.div`
display:flex;
flex-direction:column;
`

export const Title = styled.h2`
color: var(--txt-primary);
padding: 0 0 3px 20px;
`

export const Content = styled.div`
width: 400px;
max-width: 480px;
background: rgb(32, 32, 36);
border-radius: 32px;
padding: 30px;
display: flex;
flex-direction: column;
justify-content: space-between;
display: grid;
grid-template-columns: repeat(1, 1fr);
grid-row-gap: 50px;
@media(width < 768px){
    width: 100%;
    padding: 50px 20px 40px 20px;
}
`

export const Text = styled.p`
    color: var(--txt-primary);
    text-align:center;
`
export const TextBold = styled.p`
    font-weight: bold;
    font-size:18px;
    text-align: center;

    a{
        color: var(--txt-title);
    }
`

export const Img = styled.img`
    width:100%;
`

export const A = styled.a`
    text-decoration: none;
    color: #5271ff;
    font-weight: bold;
`