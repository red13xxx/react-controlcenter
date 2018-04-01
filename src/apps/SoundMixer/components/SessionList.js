import MixerList from "./MixerList";
import {connect} from "react-redux";
import {muteSession} from "../actions";

const mapStateToProps = state => {
    return {
        selectedDevice: state.selectedDevice,
        mixers: state.sessionsByDevice[state.selectedDevice]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onMute: (deviceId, sessionId, mute) => {
            dispatch(muteSession(deviceId, sessionId, mute));
        }
    }
}

const SessionList = connect(
    mapStateToProps,
    mapDispatchToProps
)(MixerList)

export default SessionList;
