import styled, { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Lexend Deca', sans-serif;
    text-decoration: none;
    list-style: none;
  }

  // ------ SCROLL BAR

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
    z-index: 1000;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
`

export default GlobalStyle

export const FixedScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

export const InputText = styled.input`
  font-size: 15px;
  font-weight: 400;
  border-radius: 6px;
  padding: 10px 15px;

  background-color: ${colors.white};
  border: 2px solid ${colors.lightBlue};
`

export const InputSubmit = styled.input`
  font-size: 16px;
  font-weight: 400;
  border-radius: 6px;
  padding: 10px 15px;
  cursor: pointer;
  transition: .2s;

  color: ${colors.lightBlue};
  background-color: ${colors.white};
  border: 2px solid ${colors.lightBlue};

  &:hover {
    color: ${colors.lightBlue};
    background-color: ${colors.gray};
  }
`