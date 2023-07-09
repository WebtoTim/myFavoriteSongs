import React from 'react'
import { Link } from 'react-router-dom'

export default function SongEntry({ choice, desription, image, name }) {

  return (
    <div className="songItem">
        <div className="songItemSong">
            <p>{choice && choice.name}</p>
        </div>
        <div className="songItemArtist">
            <p>{choice && choice.artists[0].name}</p>
        </div>
        <div className="songItemPreview">
            <audio controls src={choice && choice.preview_url} type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        </div>
        <div className="songItemCover">
            <img src={choice && choice.album.images[0].url} alt="Song Cover"/>
        </div>
        <div className="songItemUser">
            <Link to="/profile:id">
                <img className="" alt={name && name + "s profile picture"} src={image && image}/>
            </Link>
        </div>
        <div className="songItemDescription">
            <p>{desription}</p>
        </div>
        <div className="songItemAction">
            <div className="songItemLike">
                <button><i className="fa-regular fa-heart"></i></button>
            </div>
            <div className="songItemFollow">
                <button><i className="fa-regular fa-star"></i></button>
            </div>
        </div>
        
    </div>
  )
}