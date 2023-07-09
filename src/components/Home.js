import React from 'react';
import { Link } from 'react-router-dom';
import HomeNav from './HomeNav';
import ShowEntries from './ShowEntries';
import useMockApi from '../utils/useMockApi';
import MyUserData from './MyUserData';
import useAuth from '../utils/useAuth';
import useSpotify from '../utils/useSpotify';

export default function Home({ code }) {

  const accessToken = useAuth(code);
  const { spotifyData, spotifyLoading, spotifyError } = useSpotify('/me', accessToken);

  const { mockData, mockLoading, mockError } = useMockApi('/spotify/songEntry');

  const showEntries = () => {
    if (mockData) {
    return mockData.map((song, i) => (
      <ShowEntries key={i} song={song} mockLoading={mockLoading}/>
    ))
    } else {
      return <div>Loading...</div>
    }
  }

  return (
    <div id="home">
      <header>
        <div alt="filler"></div>
        {spotifyData && (
          <>
            <h2>Hi {spotifyData.display_name}!</h2>
            <div className="userProfile">
              <MyUserData mySpotifyData={{spotifyData, spotifyLoading, spotifyError}}/>
            </div>
{/*             {spotifyLoading && <div color='black'>Loading...</div>}
            {spotifyError && <div color='black'>Error: No Data found</div>} */}
          </>
        )}
      </header>
      <section>
        <Link id="signOut" to="/login">
          <button>Sign out</button>
        </Link>
        <HomeNav mySpotifyData={{spotifyData, spotifyLoading, spotifyError}} accessToken={accessToken} code={code}/>
        <section id="songContainer">
          {showEntries()}
        </section>
      </section>
      
    </div>
  );
}
