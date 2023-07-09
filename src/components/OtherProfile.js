import React from 'react'
import { useParams } from 'react-router-dom';

export default function OtherProfile() {

  const { id } = useParams();
  // Now you can use this id to fetch data for the profile with this id

  return (
    <section>
      <header>
        <img alt="Users Profile Pic" />
        <h2>Username</h2>
        <div>
          <button>Follow Username</button>
        </div>
      </header>
      <section>
        <p>Songs added by Username:</p>
        <div>
            <button>Like</button>
        </div>
      </section>
      <section>
        <p>Songs Username likes:</p>
        <div>
            <button>Like</button>
        </div>
      </section>
    </section>
  )
}
