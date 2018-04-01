import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

import './Mixer.css';

class Mixer extends Component {
    render() {
        return (
            <div className="mixer">
                Label: {this.props.label}<br/>
                Volume: {this.props.volume}<br/>
                <span onClick={this.props.onMuteClick}>Mute: {this.props.mute}</span>
            </div>
        );
    }
}

Mixer.propTypes = {
    label: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    volume: PropTypes.number.isRequired,
    mute: PropTypes.bool.isRequired,
    onMuteClick: PropTypes.func.isRequired
}

export default Mixer;
