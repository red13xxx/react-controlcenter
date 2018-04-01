import {combineReducers} from "redux";

import {
    REQUEST_DEVICES,
    RECIEVE_DEVICES,
    ERROR_DEVICES,
    REQUEST_SESSIONS,
    RECIEVE_SESSIONS,
    ERROR_SESSIONS,
    SELECT_DEVICE, UPDATE_SESSION
} from "../actions";

function selectedDevice(state = null, action){
    switch (action.type) {
        case SELECT_DEVICE:
            return action.deviceId;
        default:
            return state;
    }
}

function deviceList(state = {isFetching: false, devices: {}}, action){
    switch (action.type) {
        case REQUEST_DEVICES:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECIEVE_DEVICES:
            const devices = {};
            for (const d of action.devices){
                devices[d.ExternalId] = d;
            }
            return Object.assign({}, state, {
                isFetching: false,
                devices: devices
            })
        case ERROR_DEVICES:
            return Object.assign({}, state, {
                isFetching: false,
                devices: {}
            })
        default:
            return state;
    }
}

function sessionsByDevice(state = {}, action){
    switch (action.type) {
        case REQUEST_SESSIONS:
        case RECIEVE_SESSIONS:
        case ERROR_SESSIONS:
        case UPDATE_SESSION:
            return Object.assign({}, state, {
                [action.deviceId]: sessions(state[action.deviceId], action)
            });
        default:
            return state;
    }

}

function sessions(state = {}, action){
    switch(action.type){
        case REQUEST_SESSIONS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECIEVE_SESSIONS:
            return Object.assign({}, state, {
                isFetching: false,
                sessions: action.sessions
            });
        case ERROR_SESSIONS:
            return Object.assign({}, state, {
                isFetching: false,
                sessions: []
            });
        case UPDATE_SESSION:
            const returnObj = Object.assign({}, state, {});
            for(let i = 0; i < returnObj.sessions.length; i++){
                if(returnObj.sessions[i].ExternalId === action.sessionId){
                    returnObj.sessions[i] = action.session;
                }
            }
            return returnObj;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    selectedDevice,
    deviceList,
    sessionsByDevice
});

export default rootReducer;