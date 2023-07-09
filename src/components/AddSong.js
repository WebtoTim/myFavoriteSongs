import React, { useState, useEffect } from 'react';
import useAxios from '../utils/useAxios';
import SongResults from '../components/SongResults';
import SongEntry from './SongEntry';
import axios from 'axios';

export default function AddSong({ accessToken, toggle }) {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [choice, setChoice] = useState(null);
  const [description, setDescription] = useState('');

  const { data, loading, error } = useAxios(`/search?q=${search}&type=track&limit=10`, accessToken);

  useEffect(() => {
    if (data) {
      setResults(data.tracks.items);
    }
  }, [data]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const getDescription = (e) => {
    setDescription(e.target.value);
  };

  const postResults = () => {
    return results.map((result, index) => (
      <SongResults key={index} result={result} 
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
    if (choice) {
      const postDataObj = {
        songName: choice.name,
        artistName: choice.artists[0].name,
        songId: choice.id,
        songImg: choice.album.images[0].url,
        description: description,
      };

      try {
        const response = await axios.post(`${process.env.REACT_APP_MOCKAPI}/spotify/songEntry`, postDataObj);
        return response.data;
      } 
      catch (error) {
        console.error(error);
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
          style={{border: search || choice ? "2px solid rgb(30, 215, 96)" : "2px solid transparent"}}
          onChange={handleSearch}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
            }
        }}/>
        <>
          {search && data && postResults()}
          {loading && <div color="black">Loading...</div>}
        </>
        <input
          type="text"
          maxlength={25}
          placeholder="Short description to your Post"
          value={description}
          style={{border: description ? "2px solid rgb(30, 215, 96)" : "2px solid transparent"}}
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
          {choice && <SongEntry choice={choice} desription={description}/>}
          {loading && <div color="black">Loading...</div>}
        </div>
      </section>
      <footer id="addDelSong">
        <button onClick={toggle}>Cancel</button>
        <button onClick={
          (e) => {
            setEntry();
            toggle(e);
          }
        }>Create Post</button>
      </footer>
    </section>
  );
}
