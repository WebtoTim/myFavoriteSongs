import React from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'

export default function PlaySong({ accessToken, playingSong }) {

    if (!accessToken) {
        return null
    } else if (playingSong && accessToken){
        return <SpotifyPlayer
            token={accessToken}
            showSaveIcon
            uris={playingSong}
            play={true}
            name={'My favorite Songs by Spotify'}
            hideAttribution={true}
            styles={{bgColor: 'rgb(30, 215, 96)', color: 'rgb(255, 255, 255)', trackNameColor: 'rgb(255, 255, 255)', trackArtistColor: 'rgb(255, 255, 255)', sliderHandleColor: 'rgb(255, 255, 255)'}}
        />   
    }     
}