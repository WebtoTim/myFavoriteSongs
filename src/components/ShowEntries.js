import React from 'react'
import OtherUserData from './OtherUserData'

export default function ShowEntries({ song, mockLoading, onClick }) {
    
    const handleClick = () => {
        onClick();
    };

  return (
    <div className="songItem" onClick={handleClick}>
        {mockLoading && <div color='black'>Loading...</div>}
        <div className="songItemSong">
            <p>{song.songName}</p>
        </div>
        <div className="songItemArtist">
            <p>{song.artistName}</p>
        </div>
        <div className="songItemCover">
            <img src={song.songImg} alt="Song Cover"/>
        </div>
        <div className="songItemUser">
            <OtherUserData song={song}/>
        </div>
        <div className="songItemDescription">
            <p>{song.desription}</p>
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