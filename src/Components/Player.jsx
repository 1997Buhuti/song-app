import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faPause, faPlay} from "@fortawesome/free-solid-svg-icons";

const Player=({currentSong,isPlaying,setIsPlaying,audioRef,songsInfo,setSongsInfo})=>{

    const dragHandler=(e)=>{
        audioRef.current.currentTime = e.target.value;
        setSongsInfo({...songsInfo,currentTime:e.target.value});
    }
    const getTime=(time)=>{
        return(
            Math.floor(time/60)+":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    };

    const playSongHandler=()=>{
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(false);
        }else{
            audioRef.current.play();
            setIsPlaying(true);
        }
    }
    return(
        <div className="player">
            <div className="time-control">
                <p>{ getTime(songsInfo.currentTime)}</p>
                <input type="range"
                        min={0}
                       max={songsInfo.duration}
                       value={songsInfo.currentTime}
                       onChange={dragHandler}
                />
                <p>{ getTime(songsInfo.duration)}</p>
            </div>
            <div className="play-components">
                <FontAwesomeIcon icon={faAngleLeft} className="skip-back-btn" size='2x'/>
                {isPlaying? <FontAwesomeIcon icon={faPause} onClick={playSongHandler} className="play-btn" size='2x'/>:
                    <FontAwesomeIcon icon={faPlay} onClick={playSongHandler} className="play-btn" size='2x'/>}
                <FontAwesomeIcon icon={faAngleRight} className="skip-forward-btn" size='2x'/>
            </div>

        </div>
    )
}

export default Player;

