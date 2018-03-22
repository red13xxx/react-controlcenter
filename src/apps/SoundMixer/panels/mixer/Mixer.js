import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

import './Mixer.css';

class Mixer extends Component {
    render() {
        return (
            <div className="mixer">
                Label: {this.props.label}<br/>
                Volume: {this.props.volume}
            </div>
        );
    };
}

Mixer.propTypes = {
    label: PropTypes.string.isRequired,
    volume: PropTypes.number.isRequired,
    onMenuClick: PropTypes.func
}

export default Mixer;
