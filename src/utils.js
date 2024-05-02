import { redirect } from "react-router-dom"

async function requireAuth(request) {
  const isLoggedIn = Boolean(localStorage.getItem('loggedin')) || false
  console.log(isLoggedIn)

  const pathname = new URL(request.url).pathname

  if (!isLoggedIn) {
    const response = 
      redirect(`/login?message=You must log in first&redirectTo=${pathname}`)
    response.body = true
    throw response
  }

  return null
}

export { requireAuth }