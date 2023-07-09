import React from 'react'
import { Link } from'react-router-dom'

export default function UserSearchItem({ spotifyData }) {
  return (
    <Link id="toUserProfile" to={`/profile/${spotifyData.id}`}>
      <div id="searchResult">
        <p>
          Username: {spotifyData.id} <br />
          Displayname: {spotifyData.display_name}
        </p>
        {spotifyData.images.length > 0 && (
          <img src={spotifyData.images[0].url} alt={spotifyData.id + 's Image'} />
        )}
      </div>
    </Link>
  )
}
