import React, { useState, useRef } from 'react';


const Video = () => {
    const videoRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        const video = videoRef.current;
        isPlaying ? video.pause() : video.play();

        setIsPlaying(!isPlaying);

    }

    {/*const handlePause = () => {
        const video = videoRef.current;
        video.pause();
    }
*/}

    return (
        <div>
            <video width="400" ref={videoRef} onClick={handlePlay}>
                <source src="Videos/PlanetEarth.mp4" type="video/mp4" />

            </video>
            <button onClick={handlePlay}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            {/* <button onClick={handlePause}>
                pause
            </button>
    */}
        </div>

    );
}

export default Video