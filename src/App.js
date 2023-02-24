import React, { useState,useEffect,useRef } from "react";
import './App.css';
import Hiter_1 from '../src/sounds/Heater-1.mp3'
import Hiter_2 from '../src/sounds/Heater-2.mp3'
import Hiter_3 from '../src/sounds/Heater-3.mp3'
import Hiter_4 from '../src/sounds/Heater-4_1.mp3'
import Kick_n_Hat from '../src/sounds/Kick_n_Hat.mp3'
import Clap from '../src/sounds/Heater-6.mp3'
import Open_HH from '../src/sounds/Dsc_Oh.mp3'
import Kick from '../src/sounds/RP4_KICK_1.mp3'
import Closed_HH from '../src/sounds/Cev_H2.mp3'



const App=()=> {
    const [displayText, setDisplayText] = useState("");
    const [currentAudio, setCurrentAudio] = useState("");
    const [isCurrentAudio, setIsCurrentAudio] = useState(false);
    const audioClips = [
        {    keyCode: 81,    keyTrigger: "Q",    id: "Heater-1",    src: Hiter_1 , ref:useRef(null)},
        {    keyCode: 87,    keyTrigger: "W",    id: "Heater-2",    src: Hiter_2 ,ref:useRef(null)},
        {    keyCode: 69,    keyTrigger: "E",    id: "Heater-3",    src: Hiter_3 ,ref:useRef(null) },
        {    keyCode: 65,    keyTrigger: "A",    id: "Heater-4",     src: Hiter_4 ,ref:useRef(null)},
        {    keyCode: 83,    keyTrigger: "S",    id: "Clap",    src: Clap,ref:useRef(null)},
        {    keyCode: 68,    keyTrigger: "D",    id: "Open-HH",    src: Open_HH ,ref:useRef(null) },
        {    keyCode: 90,    keyTrigger: "Z",    id: "Kick-n-Hat",    src: Kick_n_Hat  ,ref:useRef(null)},
        {    keyCode: 88,    keyTrigger: "X",    id: "Kick",    src: Kick ,ref:useRef(null)},
        {    keyCode: 67,    keyTrigger: "C",    id: "Closed-HH",    src: Closed_HH ,ref:useRef(null) }];



    const handleButtonClick = (refAudio,keyTrigger) => {
        refAudio.current.currentTime = 0;
        refAudio.current.play();
        setDisplayText(keyTrigger);





    };

    const handleKeyDown = (event) => {
        const clip = audioClips.find((clip) => clip.keyCode === event.keyCode);
        if (!clip) {
            return;
        }
        handleButtonClick(clip.ref, clip.id);
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

//     useEffect(() => {
//
// if(isCurrentAudio) {
//     currentAudio.current.currentTime = 0;
//     currentAudio.current.play();
// }
//         setIsCurrentAudio(false);
//     }, [displayText,currentAudio,isCurrentAudio]);
    return (


        <div className="inner-container" id="drum-machine">
            <div className="pad-bank">
                {audioClips.map((clip) => (
                    <div className="drum-pad" id={clip.id}  key={clip.id} onClick={() => { handleButtonClick(clip.ref,clip.id) } } >
                        <audio className="clip" id={clip.keyTrigger}
                               src={clip.src} ref={clip.ref}></audio>
                        {clip.keyTrigger}
                    </div>


                ))}

               </div>

            <div className="controls-container">

                <p id="display">{displayText}</p>
               </div>

        </div>
    );
}

export default App;
