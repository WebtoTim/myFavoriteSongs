import React from 'react'

export default function OtherProfile() {
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
