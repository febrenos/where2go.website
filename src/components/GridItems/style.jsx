import styled from "styled-components";

export const Img = styled.img`
 width:130px;
`

export const All = styled.div`
display:flex;
gap: 10px;
flex-direction:column;
`

export const Rank = styled.div`
cursor: pointer;
border-radius: 15px;
display: flex;
gap: 10px;
padding:20px;
background: var(--bg-secondary);
align-items: center;
justify-content: center;
max-width:555px;
@media(width < 768px){
  flex-direction:column;
}
`
export const ContentGrid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-columns: repeat(auto-fill, minmax(75px, 1fr));
grid-template-rows: repeat(auto-fill, minmax(75px, 1fr));
grid-auto-rows: 75px;
gap: 10px;
`;

export const Description = styled.div`
  position: absolute;
  text-overflow: ellipsis;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  color: #fff;
  word-wrap: break-word;
  background-color: ${(props) => props.color || 'var(--bg-secondary)'};
  transform: translateY(100%);
  transition: transform 0.3s ease-in-out;
  box-sizing: border-box;
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:hover {
    transform: translateY(0);
  }
`;

export const Box = styled.div`
  cursor: pointer;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${(props) => props.color || 'var(--bg-secondary)'};
  align-items: center;
  justify-content: center;
  font-size: ${(props) => {
    const fontSizeMapping = {
      big: '35px',
      medium: '20px',
      small: '14px',
    };
    return fontSizeMapping[props.size] || 'var(--bg-secondary)';
  }};
  grid-column: ${(props) => {
    const gridColumnSizes = {
      big: 'span 3',
      medium: 'span 2',
      small: 'span 1',
    };
    return gridColumnSizes[props.size] || 'span 1';
  }};

  grid-row: ${(props) => {
    const gridRowSizes = {
      big: 'span 3',
      medium: 'span 2',
      small: 'span 1',
    };
    return gridRowSizes[props.size] || 'span 1';
  }};
  position: relative; /* Add this to position the description */
  overflow: hidden; /* Hide overflow for the description */

  ${Description} {
    background-color: ${(props) => props.color || 'var(--bg-secondary)'};
  }
  &:hover {
    ${Description} {
      transform: translateY(0);
      background-color: ${(props) => props.color || 'var(--bg-secondary)'};
    }
  }
`;



export const Flex = styled.div`
  display:flex;
  flex-direction:column;
  text-align:center;
`