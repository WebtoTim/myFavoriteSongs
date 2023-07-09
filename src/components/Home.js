import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../utils/useAuth'
import useAxios from '../utils/useAxios';
import SongEntry from './SongEntry';
import HomeNav from './HomeNav';
import axios from 'axios';

export default function Home({ code }) {

  const accessToken = useAuth(code);
  const { data, loading, error } = useAxios('/me', accessToken);

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const getEntries = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_MOCKAPI}/spotify/songEntry`);
        const songsData = response.songs;


/*         const showSongs = songsData.map((song) => ({
          return(
            <SongEntry key={song.id} song={song} />
          )
        })); */

      } catch (err) {
        console.error(err);
        throw new Error('Failed to make the GET request');
      }
    };

    getEntries();
  }, []);



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
            {loading && <div color='black'>Loading...</div>}
            {error && <div color='black'>Error: No Data found</div>}
          </>
        )}
      </header>
      <section>
        <Link id="signOut" to="/">
          <button>Sign out</button>
        </Link>
        <HomeNav accessToken={accessToken}/>
        <section id="songContainer">
          <SongEntry accessToken={accessToken}/>
        </section>
      </section>
      
    </div>
  );
}
