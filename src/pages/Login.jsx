import { Form, redirect, useActionData, useLoaderData, useNavigation } from "react-router-dom";
import { loginUser } from "../api";

function Login() {
  const message = useLoaderData()
  const error = useActionData()
  const { state } = useNavigation()
  const isSubmitting = state === 'submitting'

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h2 style={{ 'color': 'red' }}>{message}</h2>}
      {error && <h3 style={{ 'color': 'red' }}>{error}</h3>}
      <Form className="login-form" method="post" replace>
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button disabled={isSubmitting}>{isSubmitting ? 'Loggin in...' : 'Log in'}</button>
      </Form>
    </div>
  )
}

function loader({ request }) {
  return new URL(request.url).searchParams.get('message')
}

async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get('email')
  const password = formData.get('password')
  const pathname = new URL(request.url).searchParams.get('redirectTo') || '/host'

  try {
    await loginUser({ email, password })
    localStorage.setItem('loggedin', true)
    const res = redirect(pathname)
    res.body = true
    return res 
  } catch (error) {
    return error.message
  }
}

export default Login
export { action, loader };