import React from 'react';
import PropTypes from 'prop-types';

function TrackInformation(props) {
    return (
        <div className="TrackInformation">
            <div className="Artwork" style={{ 'backgroundImage': `url(${props.track.artwork})` }}></div>
            <div className="Text">
                <div className="Name">{props.track.name}</div>
                <div className="Artist">{props.track.artist}</div>
                <div className="Album">{`${props.track.album} (${props.track.year})`}</div>
            </div>
        </div>
    );
}

TrackInformation.propTypes = {
    track: PropTypes.shape({
        artwork: PropTypes.string,
        name: PropTypes.string,
        artist: PropTypes.string,
        album: PropTypes.string,
        year: PropTypes.number,
    }),
}

export default TrackInformation;
