import React, {Component} from 'react';
import {FontIcon} from "material-ui";
import axios from 'axios';

import password from "password";
import './SoundMixer.css';
import AppModel from "../../model/AppModel";
import SessionList from "./panels/sessionlist/SessionList";
import Mixer from "./panels/mixer/Mixer";

const icon = <FontIcon className="material-icons">volume_up</FontIcon>;

class SoundMixer extends Component {

    componentDidMount() {

        axios.get("https://niklasm-pc:9993/devices",{
                auth: {
                    username: "niklas.mohrdieck@outlook.de",
                    password: password
                }
            }).then(((json) => {
            this.setState({devices: json.data});
        }).bind(this));
    }

    state = {
        devices: [],
        selectedDevice: 0
    }

    getSelectedDevice() {
        return this.state.devices[this.state.selectedDevice];
    }

    render() {
        if (this.state.devices && this.state.devices.length > 0) {
            return (
                <main className="soundmixer">
                    <Mixer label={this.getSelectedDevice().FriendlyName} volume={this.getSelectedDevice().Volume}/>
                    <SessionList device={this.getSelectedDevice().ExternalId}/>
                </main>
            );
        }
        else {
            return <main className="soundmixer"/>;
        }
    };
}

export default new AppModel("SoundMixer", "/soundmixer", SoundMixer, icon);
