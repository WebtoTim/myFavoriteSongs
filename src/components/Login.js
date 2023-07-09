import { Link } from "react-router-dom"

const AUTH_URL = `https://accounts.spotify.com/authorize?response_type=code&client_id=${process.env.REACT_APP_SPOTIFY_CLIENT}&scope=${process.env.REACT_APP_SPOTIFY_SCOPE}&redirect_uri=${process.env.REACT_APP_SPOTIFY_URI}/verify`

export default function Login() {
  return (
    <div id="logIn">
      <h1>Hi, welcome to my favorite Spotify Songs</h1>
      <p>Please log in to your Spotify account, to use this app</p>
      <Link id="logInButton" to={AUTH_URL}>Sign in</Link>
    </div>

  )
}
