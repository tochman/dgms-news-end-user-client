import React from 'react'
import { useDispatch } from 'react-redux'
import auth from '../modules/auth'
import { Button, Container, Form, Input } from 'semantic-ui-react'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

const Login = ({toast}) => {
  const dispatch = useDispatch()

  const handleLogin = async (event) => {
    const form = event.target
    const email = form.email.value
    const password = form.password.value

    const response = await auth.signIn(email, password)

    if (response.data.uid) {
      dispatch({
        type: 'SET_USER_AUTHENTICATED',
        payload: true,
      })
      toast('Login successful')
    }
  }

  return (
    <>
      <Container>
        <Form onSubmit={handleLogin}>
          <Form.Field
            name="email"
            data-cy="login-email"
            placeholder="Email"
            control={Input}
            label="emai"
          />
          <Form.Field
            name="password"
            data-cy="login-password"
            type="password"
            control={Input}
            label="Password"
            placeholder="Password"
          />
          <Form.Field
            data-cy="login-submit-button"
            content="Login"
            control={Button}
          />
        </Form>
      </Container>
      
    </>
  )
}

export default Login
