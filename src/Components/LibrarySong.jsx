import React from "react";

const LibrarySong=({song,setcurrentSong,audioRef})=>{
    const changeCurrentSongHandler=()=>{
        setcurrentSong(song);
        audioRef.current.play();
    }

    return(
        <div className="lib-song" onClick={changeCurrentSongHandler}>
            <img src={song.cover} alt='fck'/>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>

        </div>
    )
}

export default LibrarySong;

