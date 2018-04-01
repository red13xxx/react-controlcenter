import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import './MixerList.css'
import Mixer from "./Mixer";

class MixerList extends Component {
    render(){
        if(!this.props.mixers || !this.props.mixers.sessions) return null;
        return (
            <div className="sessionlist">
                { this.props.mixers.sessions.map((mixer) => (
                    <Mixer
                        key={mixer.ExternalId}
                        label={mixer.Name}
                        volume={mixer.Volume}
                        mute={mixer.Mute}
                        onMuteClick={
                            () => this.props.onMute(this.props.selectedDevice, mixer.ExternalId, !mixer.Mute)}
                    />
                ))}
            </div>
        );
    }
}

MixerList.propTypes = {
    mixers: PropTypes.shape({
            isFetching: PropTypes.bool,
            sessions: PropTypes.arrayOf(
                PropTypes.shape({
                    ExternalId: PropTypes.number.isRequired,
                    Mute: PropTypes.bool.isRequired,
                    Volume: PropTypes.number.isRequired,
                    Name: PropTypes.string.isRequired
                })
            )
        }
    ).isRequired,
    selectedDevice: PropTypes.number.isRequired,
    onMute: PropTypes.func.isRequired
}

export default MixerList;
