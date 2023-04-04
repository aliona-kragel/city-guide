import styled from "styled-components";

interface IFlexContainer {
  direction?: string;
  justify?: string;
  align?: string;
  gap?: string;
  margin?: string;
  padding?: string;
  height?: string;
}

export const FlexContainer = styled.div<IFlexContainer>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify || 'center'};
  align-items: ${({ align }) => align || 'center'};
  gap: ${({ gap }) => gap || "0px"};
  margin: ${({ margin }) => margin || "0px"};
  padding: ${({ padding }) => padding || "0px"};
  height: ${({ height }) => height || ""}
`