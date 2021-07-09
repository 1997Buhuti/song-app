import Song from "./Components/song";
import Player from "./Components/Player";
import "./Styles/App.scss";
import data from "./util"
import {useRef, useState} from "react";
import Library from "./Components/Library";
function App() {
    //State variables to maintain duration
    const [songsInfo,setSongsInfo]=useState({currentTime:0,duration:0})
    const [songs,setSongs] = useState(data);
    const [currentSong,setCurrentSong] = useState(songs[0]);
    const [isPlaying,setIsPlaying] = useState(false);
    const audioRef=useRef(0);
    //handler to maintain duration
    const timeUpdateHandler=(e)=>{
        const current=e.target.currentTime;
        const duration=e.target.duration;
        setSongsInfo({
            currentTime:current,
            duration:duration
        });
    };
    return (
    <div className="App">
        <Song currentSong={currentSong}/>
        <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying}
                currentSong={currentSong} audioRef={audioRef}
                songsInfo={songsInfo} setSongsInfo={setSongsInfo}
        />
        <Library songs={songs} setcurrentSong={setCurrentSong} audioRef={audioRef}/>
        <audio
            onTimeUpdate={timeUpdateHandler}
            onLoadedMetadata={timeUpdateHandler}
            ref={useRef}
            src={currentSong.audio}
        />
    </div>
  );
}

export default App;
