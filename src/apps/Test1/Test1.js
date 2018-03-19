import React, {Component} from 'react';
import {RaisedButton} from "material-ui";
import {FontIcon} from "material-ui";

import './Test1.css';
import AppModel from "../../model/AppModel";

const icon = <FontIcon className="material-icons">favorite</FontIcon>;

class Test1 extends Component {
    render() {
        return (
            <RaisedButton label={"Test1"} />
        );
    };
}

export default new AppModel("Test1", "/test1", Test1, icon);
