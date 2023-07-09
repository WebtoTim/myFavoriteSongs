import Home from './Home';
import Login from './Login';

function Verify() {
  const code = new URLSearchParams(window.location.search).get('code');

  return code ? <Home code={code}/> : <Login />
}

export default Verify