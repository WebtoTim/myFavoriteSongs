import React, { useState } from 'react';
import { Modal } from 'reactstrap';
import useSpotify from '../utils/useSpotify';
import AddSong from './AddSong';
import UserSearchItem from './UserSearchItem';

export default function HomeNav({ mySpotifyData, accessToken, code }) {
  const [search, setSearch] = useState('');
  const [modal, setModal] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const { spotifyData, spotifyLoading, spotifyError } = useSpotify(`/users/${search}`, accessToken);

  const toggle = (e) => {
    e.preventDefault();
    setModal(!modal);
  };

  return (
    <>
      <form id="navigation">
        <select>
          <option>All</option>
        </select>
        <input
          type="text"
          placeholder="Search Users"
          value={search}
          onChange={handleSearch}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
            }
          }}
        />
        <button onClick={toggle}>Add Song</button>
        <Modal isOpen={modal} toggle={toggle}>
          <AddSong mySpotifyData={mySpotifyData} accessToken={accessToken} toggle={toggle}/>
        </Modal>
      </form>
      {search && spotifyData && <UserSearchItem spotifyData={spotifyData}/>}
      {spotifyLoading && <div color='black'>Loading...</div>}
    </>
  );
}