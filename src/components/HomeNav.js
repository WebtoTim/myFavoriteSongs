import React, { useState } from 'react';
import { Modal } from 'reactstrap';
import useAxios from '../utils/useAxios';
import AddSong from './AddSong';
import UserSearchItem from './UserSearchItem';

export default function HomeNav({ accessToken }) {
  const [search, setSearch] = useState('');
  const [modal, setModal] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const { data, loading, error } = useAxios(`/users/${search}`, accessToken);

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
          <AddSong accessToken={accessToken} toggle={toggle}/>
        </Modal>
      </form>
      {search && data && <UserSearchItem data={data}/>}
      {loading && <div color='black'>Loading...</div>}
    </>
  );
}