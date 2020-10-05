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

        <div className="containerVideo px-lg-2  pt-2 mt-2 pb-2 mb-2">
            <div>
                <div className="main-container px-lg-5 pt-5 mt-5 pb-5 mb-5">
                    <video width="800" ref={videoRef} onClick={handlePlay}>
                        <source src="Videos/PlanetEarth.mp4" type="video/mp4" />

                    </video>
                    {/*<button onClick={handlePlay}>
                        {isPlaying ? 'Pause' : 'Play'}
                    </button>
                    */}
                    {/* <button onClick={handlePause}>
                pause
            </button>
            */}
                </div>
            </div>
        </div>

    );
}

export default Video