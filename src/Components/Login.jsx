import React from 'react'
import { Button, Container, Input } from 'semantic-ui-react'


const Login = () => {
  return (
    <>
      <Container>
      <Input data-cy="login-email" placeholder="Email" />
      <Input  data-cy="login-password"password placeholder="Password" />
      <Button data-cy="login-submit-button" type="submit">Login</Button>
      </Container>
    </>
  )
}

export default Login
