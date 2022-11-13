import { NODE_HEIGHT, NODE_WIDTH } from "./constants";
import { HTMLProps } from "react";
import styled from "styled-components";

interface ContainerProps extends HTMLProps<HTMLDivElement> {
  selected: boolean;
  disableEvents: boolean;
  initialOffsetY: number;
  initialOffsetX: number;
}

const Container = styled.div.attrs<ContainerProps>((props) => {
  return {
    style: {
      left: `${props.initialOffsetX}px`,
      top: `${props.initialOffsetY}px`,
    },
  };
})<ContainerProps>`
  width: ${NODE_WIDTH}px;
  height: ${NODE_HEIGHT}px;
  border: ${(props) => (props.selected ? "4px solid #FFBF00" : "")};
  ${(props) => (props.disableEvents ? "pointer-events: none" : "")};
  position: absolute;
  background-color: ${(props) => props.color};
  border-radius: 8px;
`;

export { Container };
