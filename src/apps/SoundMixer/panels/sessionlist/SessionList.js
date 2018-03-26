import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

import password from "/password";
import './SessionList.css'
import Mixer from "../mixer/Mixer";
import axios from 'axios';

class SessionList extends Component {


    componentDidMount() {
        axios.get("https://niklasm-pc:9993/devices/" + this.props.device + "/sessions", {
            auth: {
                username: "niklas.mohrdieck@outlook.de",
                password: password
            }
        }).then(((json) => {
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
                    return ([<Mixer label={session.Name} volume={session.Volume}/>,
                        <Mixer label={session.Name} volume={session.Volume}/>]);
                })}
            </div>
        );
    };
}

SessionList.propTypes = {
    device: PropTypes.string.isRequired
}

export default SessionList;
