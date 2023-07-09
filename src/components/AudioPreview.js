import React from 'react'

export default function AudioPreview({ result }) {
  return (
    <div className="songResultsPreview">
        <audio controls src={result.preview_url} alt="no preview" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    </div>
  )
}
