import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Flex = styled.div`
    display: flex;
    gap: 5px;
    align-items: baseline;
`;

export const FlexTop = styled.div`
    display: flex;
    gap: 5px;
`;

export const GridTop = styled.div`
    display:flex;
    flex-direction:column;
    gap: 5px;
`

export const Bold = styled.p`
    font-weight: 600;
    color: var(--txt-title);
    font-size: 17px;
`;

export const DescriptionText = styled.p`
  font-size: 16px;
  width:200px
`;

export const IconsInline = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    width:100%;
    gap:25px;
    padding-top:20px;
`

export const ContentIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${props => (props.requestStatus === 'request' ? 'var(--txt-primary)' : 'var(--primary-color)')};
  font-size: 20px;
  padding: 10px;
  height: 30px;
`;


export const CopyContent = styled.div`
    background-color: var(--txt-primary);
    transition:.1s;
    border-radius: ${props => (props.isClick ? '15px' : '100%')};
    padding: 3px;
    width: ${props => (props.isClick ? '70px' : '35px')};
    height: 35px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 14px; /* Defina o tamanho da fonte aqui */
`;

export const CopyIcon = styled(FontAwesomeIcon)`
    color: ${props => (props.isClick ? 'transparent' : 'var(--bg-secondary)')};
    font-size: 20px;
    position: absolute;
    z-index:1;
`;

export const SwitchContent = styled.div`
    background-color: ${props => (props.isActive ? 'var(--primary-color)' : 'var(--txt-primary)')};
    transition:.1s;
    border-radius: ${props => (props.isClick ? '15px' : '100%')};
    padding: 3px;
    width: ${props => (props.isClick ? '85px' : '35px')};
    height: 35px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 14px; /* Defina o tamanho da fonte aqui */
`;

export const SwitchIcon = styled(FontAwesomeIcon)`
    color: ${props => (props.isClick ? 'transparent' : 'var(--bg-secondary)')};
    font-size: 20px;
    position: absolute;
    z-index:1;
`;

export const CopyText = styled.p`
    font-size: 14px;
    font-weight:600;
    color: ${props => (props.isClick ? 'var(--bg-secondary)' : 'transparent')};
    position: absolute;
`;


export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    transition: 2s;
    margin-top: 20px;
    opacity: ${props => (props.isShowMore ? '1' : '0')};

    & > :nth-last-child(2) {
        padding-top: 10px; /* Adapte o valor conforme necessário */
    }
`;

export const VisitedByMe = styled.div`
display: flex;
gap: 5px;
align-items: baseline;
& > *{
    color: ${props => (props.isVisitedByMe ? 'var(--primary-color)' : '')};
}
`
export const LikeContentBottom = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    color: var(--primary-color);
`;
