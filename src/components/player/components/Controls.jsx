import React from 'react';
import PropTypes from 'prop-types';

function Controls(props) {
    return (
        <div className="Controls">
            <div onClick={props.onClick} className="Button">
                <i className={`fa fa-fw fa-${props.isPlaying ? 'play' : 'pause'}`}></i>
            </div>
        </div>
    );
}

Controls.propTypes = {
    onClick: PropTypes.func,
    isPlaying: PropTypes.bool,
}

export default Controls;
