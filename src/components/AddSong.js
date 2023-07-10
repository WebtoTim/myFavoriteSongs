import React, { useState, useEffect } from 'react';
import useSpotify from '../utils/useSpotify';
import SongResults from '../components/SongResults';
import SongEntry from './SongEntry';
import axios from 'axios';

export default function AddSong({ mySpotifyData, accessToken, toggle }) {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [choice, setChoice] = useState(null);
  const [description, setDescription] = useState('');

  const { spotifyData, spotifyLoading, spotifyError } = useSpotify(`/search?q=${search}&type=track&limit=10`, accessToken);

  useEffect(() => {
    if (spotifyData) {
      setResults(spotifyData.tracks.items);
    }
  }, [spotifyData]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const getDescription = (e) => {
    setDescription(e.target.value);
  };

  const postSearchResults = () => {
    return results.map((result, i) => (
      <SongResults key={i} result={result} 
        onClick={
          () => {
            setChoice(result);
            setSearch('');
          }
        }
      />
    ));
  };

  const setEntry = async () => { 
    if (choice && mySpotifyData) {
      const songObject = {
        songName: choice.name,
        artistName: choice.artists[0].name,
        songId: choice.uri,
        songImg: choice.album.images[0].url,
        description: description,
        user: mySpotifyData.spotifyData.id,
        userImg: mySpotifyData.spotifyData.images[0].url,
      };

      try {
        const response = await axios.post(`${process.env.REACT_APP_MOCKAPI}/spotify/songEntry`, songObject);
        return response;
      } 
      catch (error) {
        throw new Error('Failed to make the POST request');
      }
    }
    else return;
  } 

  return (
    <section id="addSong">
      <header>
        <h2>Add a Song</h2>
      </header>
      <form>
        <input
          type="text"
          placeholder="Search Songs"
          value={search}
          style={{border: search || choice ? "2px solid rgb(30, 215, 96)" : "2px solid rgb(228, 25, 25)"}}
          onChange={handleSearch}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
            }
        }}/>
        <>
          {search && spotifyData && postSearchResults()}
          {spotifyLoading && <div color="black">Loading...</div>}
        </>
        <input
          type="text"
          maxLength={25}
          placeholder="Short description to your Post"
          value={description}
          style={{border: description ? "2px solid rgb(30, 215, 96)" : "2px solid rgb(228, 25, 25)"}}
          onChange={getDescription}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
            }
        }}/>
      </form>
      <section>
        <h4>Preview of my Post:</h4>
        <div id="preview">
          {choice && <SongEntry choice={choice} desription={description} mySpotifyData={mySpotifyData}/>}
          {spotifyLoading && <div color="black">Loading...</div>}
        </div>
      </section>
      <footer id="addDelSong">
        <button onClick={toggle}>Cancel</button>
        <button
          style={{
            border: choice && description ? '2px solid rgb(30, 215, 96)' : '2px transparent',
          }}
          onClick={(e) => {
            if (choice && description) {
              setEntry();
              toggle(e);
            } else {
              e.target.style.border = "2px solid rgb(228, 25, 25)";
            }
          }}
        >Create Post
        </button>
      </footer>
    </section>
  );
}
