import {connect} from "react-redux";
import Device from "./Device";
import {fetchDevices, fetchSessions, selectDevice} from "../actions";

const mapStateToProps = state => {
    return {
        selectedDevice: state.selectedDevice,
        deviceList: state.deviceList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSelect: id => {
            dispatch(fetchSessions(id))
            dispatch(selectDevice(id));
        }
    }
}

const SelectedDevice = connect(
    mapStateToProps,
    mapDispatchToProps
)(Device)

export default SelectedDevice;