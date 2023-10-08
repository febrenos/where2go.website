import styled from "styled-components";

export const BackgroundCard = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
background-color:var(--bg-secondary);
width: ${(props) => (props.size ? '100%' : (props.size === 'md' ? '350px' : '120px'))};
width: ${(props) => (props.size ? 'auto' : (props.size === 'md' ? '350px' : '120px'))};
border-radius:${(props) => (props.size ? 'auto' : (props.size === 'md' ? '15px' : '32px'))};
padding:30px;
@media(width < 768px){
    width:100%;
}
`
export const Title = styled.h3`
color:var(--text-primary);
font-size:20px;
`