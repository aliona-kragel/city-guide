
import styled from "styled-components";

interface ITagContainer {
  direction?: string;
  justify?: string;
  align?: string;
  gap?: string;
}

export const Tag = styled.div<ITagContainer>`
display: flex;
position: relative;
flex-direction: ${({ direction }) => direction || 'row'};
justify-content: ${({ justify }) => justify || 'center'};
align-items: ${({ align }) => align || 'center'};
gap: ${({ gap }) => gap || "0.5rem"};
width: 180px;
height: 55px;
border-radius: 4px;
padding: 8px;
background: linear-gradient(51deg, rgba(180,205,147,1) 70%, rgba(66,122,91,1) 78%, rgba(255,202,102,1) 78%);
color: #FFFFFF;
}
`