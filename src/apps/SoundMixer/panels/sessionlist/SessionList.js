import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

import './SessionList.css'
import Mixer from "../mixer/Mixer";
import axios from 'axios';

class SessionList extends Component {


    componentDidMount() {
        axios.get("http://localhost:9096/devices/" + this.props.device + "/sessions").then(((json) => {
            this.setState({sessions: json.data});
        }));
    }

    state = {
        sessions: []
    }

    render() {
        return (
            <div className="sessionlist">
                {this.state.sessions.map((session) => {
                    return ([<Mixer label={session.Name} volume={session.Volume}/>, <Mixer label={session.Name} volume={session.Volume}/>]);
                })}
            </div>
            );
    };
}

SessionList.propTypes = {
    device: PropTypes.string.isRequired
}

export default SessionList;
