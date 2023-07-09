import React from 'react'
import { Link } from 'react-router-dom'

export default function MyUserData({ song }) {

  return (
    <Link to="/profile:id">
        {song && (
            <img className="userImg" alt={song.user + "s profile picture"} src={song.userImg}/>
        )}
    </Link>
  )
}
