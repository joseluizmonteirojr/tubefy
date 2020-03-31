import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TrackInformation from './components/TrackInformation.jsx';
import Scrubber from './components/Scrubber.jsx';
import Controls from './components/Controls.jsx';
import Timestamps from './components/Timestamps.jsx';
import './Player.scss';

function Player(props) {
    const [isPlaying, togglePlay] = useState(true);
    const [currentTime, updateTime] = useState(0);

    const handleUpdateTime = (timestamp) => updateTime(Math.floor(timestamp))
    const updateScrubber = (percent) => {
        // Set scrubber width
        const innerScrubber = document.querySelector('.Scrubber-Progress');
        innerScrubber.style['width'] = percent;
    }
    const handleTogglePlay = () => {
        const audio = document.getElementById('audio');
        if (isPlaying) {
            audio.play();
            setInterval(() => {
                // Calculate percent of song
                handleUpdateTime(audio.currentTime);
                const percent = `${(audio.currentTime / props.track.duration) * 100}%`;
                updateScrubber(percent);
            }, 100);
        } else {
            audio.pause();
        }
        togglePlay(!isPlaying);
    }

    return (
        <div className="Player">
            <div className="Background" style={{ 'backgroundImage': `url(${props.track.artwork})` }}></div>
            <div className="Content">
                <TrackInformation track={props.track} />
            </div>
            <div className="Footer">
                <Scrubber />
                <Controls isPlaying={isPlaying} onClick={handleTogglePlay} />
                <Timestamps duration={props.track.duration} currentTime={currentTime} />
                <audio id="audio">
                    <source src={props.track.source} />
                </audio>
            </div>
        </div>
    );

}

Player.propTypes = {
    track: PropTypes.shape({
        name: PropTypes.string,
        artist: PropTypes.string,
        album: PropTypes.string,
        year: PropTypes.number,
        artwork: PropTypes.string,
        duration: PropTypes.number,
        source: PropTypes.string,
    }),
}

Player.defaultProps = {
    track: {
        name: "We Were Young",
        artist: "Odesza",
        album: "Summer's Gone",
        year: 2012,
        artwork: "https://funkadelphia.files.wordpress.com/2012/09/odesza-summers-gone-lp.jpg",
        duration: 192,
        source: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3"
    },
};

export default Player;
