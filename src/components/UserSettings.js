import React from 'react'
import { Link } from 'react-router-dom'

export default function UserSettings() {
  return (
    <section>
      <header>
        <Link to="/profile">
          <img alt="My Profile Pic" />
        </Link>
        <h2>Settings</h2>
      </header>
      <section>
        <p>Where should liked Songs be added</p>
        <p>Create new Playlist with AppName</p>
        <p>Light / Dark mode</p>
        <p>Delete my Useraccount and all Data</p>
      </section>
    </section>
  )
}
