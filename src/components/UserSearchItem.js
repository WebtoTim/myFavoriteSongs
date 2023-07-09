import React from 'react'
import { Link } from'react-router-dom'

export default function UserSearchItem({data}) {
  return (
    <Link id="toUserProfile" to={`/profile/${data.id}`}>
      <div id="searchResult">
        <p>Username: {data.id} <br />
        Displayname: {data.display_name}</p>
        {data.images.length > 0 && (
          <img src={data.images[0].url} alt={data.id + 's Image'} />
        )}
      </div>
    </Link>
  )
}
