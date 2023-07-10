import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HomeNav from './HomeNav';
import ShowEntries from './ShowEntries';
import useMockApi from '../utils/useMockApi';
import MyUserData from './MyUserData';
import useAuth from '../utils/useAuth';
import useSpotify from '../utils/useSpotify';
import PlaySong from './PlaySong';

export default function Home({ code }) {
  const accessToken = useAuth(code);
  const { spotifyData, spotifyLoading, spotifyError } = useSpotify('/me', accessToken);

  const { mockData, mockLoading, mockError } = useMockApi('/spotify/songEntry');

  const [playingSong, setPlayingSong] = useState(null);

  useEffect(() => {
    if (playingSong) {
      setPlayingSong(null);
      playThisSong(playingSong);
    }
  }, [playingSong]);

  const playThisSong = (song) => {
    setPlayingSong(song);
  };

  const showEntries = () => {
    if (mockData) {
      return mockData.map((song, i) => (
        <ShowEntries
          key={i}
          song={song}
          accessToken={accessToken}
          mockLoading={mockLoading}
          onClick={() => playThisSong(song)}
        />
      ));
    } else {
      return <div>Loading...</div>;
    }
  };

  return (
    <div id="home">
      <header id="top">
        <Link to="/" className="logOut">
              <button><i class="fa-solid fa-right-from-bracket"></i></button>
        </Link>
        {spotifyData && (
          <>
            <h2>Hi {spotifyData.display_name}!</h2>
            <div className="userProfile">
              <MyUserData mySpotifyData={{ spotifyData, spotifyLoading, spotifyError }} />
            </div>
            {spotifyLoading && <div color="black">Loading...</div>}
            {spotifyError && <div color="black">Error: No Data found</div>}
          </>
        )}
      </header>
      <HomeNav mySpotifyData={{ spotifyData, spotifyLoading, spotifyError }} accessToken={accessToken} code={code} />
      <section id="center">
        <section id="songContainer">{showEntries()}</section>
      </section>
      <footer id="bottom" className="playSong">
        {playingSong ? (<PlaySong accessToken={accessToken} playingSong={playingSong.songId}/>) : <div>Click a Card above</div> }
      </footer> 
    </div>
  );
}