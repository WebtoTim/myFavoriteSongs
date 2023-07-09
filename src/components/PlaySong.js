import React from 'react'
import Spotify from 'spotify-web-api-js'

export default function PlaySong() {

    window.onSpotifyWebPlaybackSDKReady = () => {
        const token = '[My access token]';
        const player = new Spotify.Player({
          name: 'Web Playback SDK Quick Start Player',
          getOAuthToken: cb => { cb(token); },
          volume: 0.5
        });
    };
  return (
    <div>PlaySong</div>
  )
}
