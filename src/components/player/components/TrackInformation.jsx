import React from 'react';
import PropTypes from 'prop-types';

function TrackInformation(props) {
    return (
        <div className="TrackInformation">
            <div className="Name">{props.track.name}</div>
            <div className="Artist">{props.track.artist}</div>
            <div className="Album">{props.track.album} ({props.track.year})</div>
        </div>
    );
}

TrackInformation.propTypes = {
    track: PropTypes.shape({
        name: PropTypes.string,
        artist: PropTypes.string,
        album: PropTypes.string,
        year: PropTypes.number,
    }),
}

export default TrackInformation;
