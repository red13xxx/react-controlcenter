import React from 'react'
import {PropTypes} from 'prop-types';

import './Device.css';

const renderDeviceList = (devices, onSelectItem) => {
    let arr = [];
    for(const key in devices){
        arr.push(devices[key]);
    }
    return arr.map((device) => (
        <li
            key={device.ExternalId}
            onClick={() => {onSelectItem(device.ExternalId)}}>
            {device.FriendlyName}
        </li>
    ))
}

const Device = ({selectedDevice, deviceList, onSelect}) => {
    const device = deviceList.devices[selectedDevice];
    let label = "Not selected";
    if(device){
        label = device.FriendlyName;
    }

    return (
    <div className="mixer">
        Label: {label}<br/>
        {renderDeviceList(deviceList.devices, onSelect)}
    </div>
)};

Device.propTypes = {
    selectedDevice: PropTypes.number.isRequired,
    deviceList: PropTypes.shape({
        isFetching: PropTypes.bool,
        devices: PropTypes.object
    }).isRequired,
    onSelect: PropTypes.number.isRequired
}

export default Device;
