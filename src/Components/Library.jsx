import React from "react";
import LibrarySong from "./LibrarySong";

const Library=({songs,setcurrentSong,audioRef})=>{
    return(
        <div className="library">
            <h2>Library</h2>
            <div className="lib-songs">
                {songs.map((song)=> <LibrarySong song={song} setcurrentSong={setcurrentSong} audioRef={audioRef}/>)}
            </div>
        </div>
    )
}

export default Library