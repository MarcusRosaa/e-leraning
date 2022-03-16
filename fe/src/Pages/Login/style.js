import styled from "styled-components";
import colors from "../../Utils/colors";
import { FixedScreen, InputText, InputSubmit } from '../../Utils/globalstyles'

export const LoginPage = styled(FixedScreen)`
  position: relative;
  /* background-color: ${colors.grayBlue}; */

  background: linear-gradient(to left, ${colors.darkBlue}, ${colors.lightBlue});
`

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 360px;
  border-radius: 6px;
  padding: 30px;
  z-index: 1;

  background-color: ${colors.darkBlue};
  /* border: 2px solid ${colors.lightBlue}; */
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
  color: ${colors.white};
`

export const LoginHeader = styled.div`

`

export const LoginHeaderText = styled.h2`
  font-size: 24px;
  font-weight: 500;
`

export const LoginDivisor = styled.div`
  width: 30%;
  height: 6px;
  border-radius: 50px;
  margin: 20px 0 26px 0;

  background-color: ${colors.white};
`

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
`

export const LoginFormInputEmail = styled(InputText)`
  margin-bottom: 10px;
`

export const LoginFormInputPassword = styled(InputText)`
  margin-bottom: 5px;
`

export const LoginFormInputSubmit = styled(InputSubmit)`
  margin-top: 20px;
`

export const LoginFormError = styled.div`
  height: 15px;
  text-align: right;
  font-size: 14px;
  font-weight: 300;
  color: red;
`

export const LoginPageImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 0;
  opacity: 0.02;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`