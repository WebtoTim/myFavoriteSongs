import React from 'react'
import { Link } from 'react-router-dom'
import useAxios from '../utils/useAxios';

export default function SongEntry({ choice, desription, accessToken }) {

    const { data, loading, error } = useAxios('/me', accessToken);

  return (
    <div className="songItem">
        {loading && <div color='black'>Loading...</div>}
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
                <img className="" alt={data && data.id + "s profile picture"} src={data && data.images[0].url}/>
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