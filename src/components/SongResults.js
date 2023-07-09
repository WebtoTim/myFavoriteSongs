import React from 'react'
import { Link } from 'react-router-dom'
import AudioPreview from './AudioPreview';

export default function SongResults({ result, onClick }) {

    const handleClick = () => {
        onClick();
    };

  return (
    <Link className="songResults" key={result.id} onClick={handleClick}>
        <div className="songResultsSong">
            <p>{result.name}</p>
        </div>
        <div className="songResultsArtist">
            <p>{result.artists[0].name}</p>
        </div>
        { result.preview_url ? <AudioPreview result={result}/> : <div className="songResultsNoPreview">No preview accessible</div> }
        <div className="songResultsCover">
            <img src={result.album.images[0].url} alt="Song Cover"/>
        </div>
    </Link>
  )
}