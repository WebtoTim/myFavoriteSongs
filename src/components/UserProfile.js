import React from 'react'
import { Link } from 'react-router-dom'

export default function UserProfile() {
  return (
    <section>
      <header>
        <img alt="My Profile Pic" />
        <h2>Hello Username</h2>
      </header>
      <section>
        <p>My added Songs:</p>
        <button>Add Song</button>
      </section>
      <section>
        <p>Songs i like:</p>
      </section>
      <section>
        <div>
          <p>Users i follow:</p>
        </div>
        <div>
          <Link to="/settings">
            <button>Settings</button>
          </Link>
        </div>
      </section>
    </section>
  )
}
