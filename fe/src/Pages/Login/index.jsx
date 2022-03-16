import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './style'

import LoginBgImage from '../../Assets/LoginBackground.png'

const Login = () => {

  const navigate = useNavigate()

  const [errorMessage, setErrorMessage] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const setError = (message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage('')
    }, 3000);
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()

    if (email === '' || password === '') {
      setError('Preencha todos os campos!')
      return
    }

    navigate('/admin')
  }

  return (
    <S.LoginPage>
      
      <S.Login>
        <S.LoginHeader>
          <S.LoginHeaderText>Fazer login</S.LoginHeaderText>
        </S.LoginHeader>
        <S.LoginDivisor></S.LoginDivisor>
        <S.LoginForm>
          <S.LoginFormInputEmail 
            type='text' 
            placeholder='Digite seu e-mail' 
            onChange={(e) => setEmail(e.target.value)}
          />
          <S.LoginFormInputPassword 
            type='password' 
            placeholder='Digite sua senha' 
            onChange={(e) => setPassword(e.target.value)}
          />
          <S.LoginFormError>{errorMessage}</S.LoginFormError>
          <S.LoginFormInputSubmit 
            type='submit' 
            value='ENTRAR'
            onClick={(e) => handleSubmitForm(e)}
          />
        </S.LoginForm>
      </S.Login>

      <S.LoginPageImage>
        <img src={LoginBgImage} alt="" />
      </S.LoginPageImage>
      
    </S.LoginPage>
  )
}

export default Login