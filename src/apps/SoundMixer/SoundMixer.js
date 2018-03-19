import React, {Component} from 'react';
import {RaisedButton} from "material-ui";
import {FontIcon} from "material-ui";

import './SoundMixer.css';
import AppModel from "../../model/AppModel";

const icon = <FontIcon className="material-icons">volume_up</FontIcon>;

class SoundMixer extends Component {
    render() {
        return (
            <RaisedButton label={"SoundMixer"} />
        );
    };
}

export default new AppModel("SoundMixer", "/soundmixer", SoundMixer, icon);
