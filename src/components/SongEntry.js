import React from 'react'
import MyUserData from './MyUserData';
import AudioPreview from './AudioPreview';

export default function SongEntry({ choice, desription, mySpotifyData }) {

  return (
    <div className="songItem">
        {mySpotifyData.mySpotifyLoading && <div color='black'>Loading...</div>}
        <div className="songItemSong">
            <p>{choice && choice.name}</p>
        </div>
        <div className="songItemArtist">
            <p>{choice && choice.artists[0].name}</p>
        </div>
        <div className="songItemPreview">
            {choice && choice.preview_url ? <AudioPreview choice={choice}/> : <div className="songResultsNoPreview">No preview available</div>}
        </div>
        <div className="songItemCover">
            <img src={choice && choice.album.images[0].url} alt="Song Cover"/>
        </div>
        <div className="songItemUser">
            <MyUserData mySpotifyData={mySpotifyData}/>
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