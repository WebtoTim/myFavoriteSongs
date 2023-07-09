import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../utils/useAuth'
import useAxios from '../utils/useAxios';
import SongEntry from './SongEntry';
import HomeNav from './HomeNav';

export default function Home({ code }) {
  const accessToken = useAuth(code);
  const { data, loading, error } = useAxios('/me', accessToken);
    
  return (
    <div id="home">
      <header>
        <div alt="filler"></div>
        {data && (
        <>
          <h2>Hi {data.display_name}!</h2>
          <div className="userProfile">
          <Link to="/profile">
              <img
              className="userImg"
              alt={data.id + "s profile picture"}
              src={data.images[0].url}
              />
          </Link>
          </div>
        </>
        )}
        {loading && <div color='black'>Loading...</div>}
      </header>
      <section>
        <Link id="signOut" to="/">
          <button>Sign out</button>
        </Link>
        <HomeNav accessToken={accessToken}/>
        <section id="songContainer">
          <SongEntry image={data && data.images[0].url} name={data && data.id}/>
        </section>
      </section>
    </div>
  );
}
