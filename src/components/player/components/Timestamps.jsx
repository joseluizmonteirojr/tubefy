import React from 'react';
import PropTypes from 'prop-types';

function Timestamps(props) {
    const formatTime = (timestamp) => {
        const minutes = Math.floor(timestamp / 60);
        const seconds = timestamp - (minutes * 60);
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    }

    return (
        <div className="Timestamps">
            <div className="Time Time--current">{formatTime(props.currentTime)}</div>
            <div className="Time Time--total">{formatTime(props.duration)}</div>
        </div>
    );

}

Timestamps.propTypes = {
    currentTime: PropTypes.number,
    duration: PropTypes.number,
}

export default Timestamps;
