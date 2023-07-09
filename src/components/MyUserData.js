import React from 'react'
import { Link } from 'react-router-dom'

export default function MyUserData({ mySpotifyData }) {

  return (
    <Link to="/profile:id">
        { mySpotifyData.spotifyData && (
            <img className="userImg" alt={mySpotifyData.spotifyData.id + "s profile picture"} src={mySpotifyData.spotifyData.images[0].url}/>
        )}
        {mySpotifyData.spotifyLoading && <div color='black'>Loading...</div>}
        {mySpotifyData.spotifyError && <div color='black'>Error: No Data found</div>}
    </Link>
  )
}
