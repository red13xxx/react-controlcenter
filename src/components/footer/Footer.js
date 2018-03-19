import React, {Component} from 'react';
import PropTypes from "prop-types";

import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

import {withRouter} from 'react-router-dom';

import './Footer.css';

class Footer extends Component {

    navigate(path, i) {
        this.setState({selectedIndex: i});
        this.props.history.push(path);
    }

    appList = this.props.apps.map(
        (app, i) => {
            return (
                <BottomNavigationItem
                    label={app.Label}
                    icon={app.IconComponent}
                    onClick={() => this.navigate(app.Path, i)}/>
            );
        }
    );

    state = {
        selectedIndex: 0,
    };

    render() {
        return (
            <Paper zDepth={1} id='footer'>
                <BottomNavigation selectedIndex={this.state.selectedIndex}>
                    {this.appList}
                </BottomNavigation>
            </Paper>
        );
    };
}

Footer.propTypes = {
    apps: PropTypes.array
}

export default withRouter(Footer);
