import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

import './Device.css';

class Device extends Component {

    renderDeviceList(devices, onSelectItem){
        let arr = [];
        for (const key in devices) {
            arr.push(devices[key]);
        }
        return arr.map((device) => (
            <li
                key={device.ExternalId}
                onClick={() => {
                    onSelectItem(device.ExternalId)
                }}>
                {device.FriendlyName}
            </li>
        ));
    }

    render() {
        const device = this.props.deviceList.devices[this.props.selectedDevice];
        let label = "Not selected";
        if (device) {
            label = device.FriendlyName;
        }

        return (
            <div className="mixer">
                Label: {label}<br/>
                {this.renderDeviceList(this.props.deviceList.devices, this.props.onSelect)}
            </div>
        );
    }
}

Device.propTypes = {
    selectedDevice: PropTypes.number.isRequired,
    deviceList: PropTypes.shape({
        isFetching: PropTypes.bool,
        devices: PropTypes.object
    }).isRequired,
    onSelect: PropTypes.number.isRequired
}

export default Device;
