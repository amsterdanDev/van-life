import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { loginUser } from "../api";

function Login() {
  const navigate = useNavigate()
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)
  const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })
  const message = useLoaderData()

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    setError(null)

    try {
      await loginUser(loginFormData)
      navigate('/host', { replace: true })
    } catch (error) {
      setError(error)
    }

    setStatus('idle')
  }

  function handleChange(e) {
    const { name, value } = e.target
    setLoginFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h2 style={{ 'color': 'red' }}>{message}</h2>}
      {error && <h2 style={{ 'color': 'red' }}>{error.message}</h2>}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Logging in...' : 'Log in'}
        </button>
      </form>
    </div>
  )
}

function loader({ request }) {
  return new URL(request.url).searchParams.get('message')
}

export default Login
export { loader }
