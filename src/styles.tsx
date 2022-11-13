import styled, { createGlobalStyle } from "styled-components";

const Button = styled.button`
  padding: 12px 32px;
  width: 180px;
  font-size: 18px;
  background-color: white;
  border: none;
  border-radius: 4px;
  background-color: #5762d5;
  color: white;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
`;

const Input = styled.input`
  width: 30px;
  text-align: center;
  border-radius: 4px;
  padding: 8px;
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const AppContainer = styled.div`
  padding: 12px;
  width: calc(100% - 24px);
  height: calc(100% - 24px);
`;

const NodesContainer = styled.div`
  position: relative;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #FAFAEB;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }
`;

export {
  Button,
  Input,
  ButtonGroup,
  AppContainer,
  NodesContainer,
  GlobalStyle,
};
