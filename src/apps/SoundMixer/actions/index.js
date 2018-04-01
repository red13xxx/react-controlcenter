import axios from "axios";
import {username, password} from "../password"

export const REQUEST_DEVICES = "REQUEST_DEVICES";
function requestDevices() {
    return {
        type: REQUEST_DEVICES
    }
}

export const RECIEVE_DEVICES = "RECIEVE_DEVICES";
function recieveDevices(json) {
    return {
        type: RECIEVE_DEVICES,
        devices: json.data
    }
}

export const ERROR_DEVICES = "ERROR_DEVICES";
function errorDevices() {
    return {
        type: ERROR_DEVICES
    }
}

export const REQUEST_SESSIONS = "REQUEST_SESSIONS";
function requestSessions(deviceId) {
    return {
        type: REQUEST_SESSIONS,
        deviceId: deviceId
    }
}

export const RECIEVE_SESSIONS = "RECIEVE_SESSIONS";
function recieveSessions(deviceId, json) {
    return {
        type: RECIEVE_SESSIONS,
        sessions: json.data,
        deviceId: deviceId
    }
}

export const ERROR_SESSIONS = "ERROR_SESSIONS";
function errorSessions(deviceId) {
    return {
        type: ERROR_SESSIONS,
        deviceId: deviceId
    }
}

export const SELECT_DEVICE = "SELECT_DEVICE";
export function selectDevice(deviceId) {
    return {
        type: SELECT_DEVICE,
        deviceId: deviceId
    }
}

export const UPDATE_SESSION = "UPDATE_SESSION";
export function updateSession(deviceId, sessionId, session){
    return {
        type: UPDATE_SESSION,
        deviceId: deviceId,
        sessionId: sessionId,
        session: session
    }
}

export const MUTE_SESSION = "MUTE_SESSION";
export function muteSession(deviceId, sessionId, mute) {

    return function (dispatch) {
        return axios.post("https://niklasm-pc:9993/devices/"+deviceId+"/sessions/"+sessionId+"/mute", mute, {
            auth: {
                username: username,
                password: password
            }
        }).then((json) => {
            dispatch(updateSession(deviceId, sessionId, json.data));
        });
    }
}

export function fetchDevices() {

    return function (dispatch){
        dispatch(requestDevices());

        return axios.get("https://niklasm-pc:9993/devices", {
            auth: {
                username: username,
                password: password
            }
        }).then(((json) => {
            dispatch(recieveDevices(json));
        }));
    }

}

export function fetchSessions(deviceId){
    return function (dispatch) {
        dispatch(requestSessions(deviceId));

        return axios.get("https://niklasm-pc:9993/devices/"+deviceId+"/sessions", {
            auth: {
                username: username,
                password: password
            }
        }).then(((json) => {
            dispatch(recieveSessions(deviceId, json));
        }));
    }
}