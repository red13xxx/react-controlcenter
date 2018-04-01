import React, {Component} from 'react';
import {FontIcon} from "material-ui";
import AppModel from "../../model/AppModel";
import SelectedDevice from "./components/SelectedDevice";
import SessionList from "./components/SessionList";
import rootReducer from "./reducers";
import {fetchDevices} from "./actions";
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from "redux-thunk"
import "./index.css"

const icon = <FontIcon className="material-icons">volume_up</FontIcon>;

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
);

class SoundMixer extends Component {

    componentDidMount(){
        store.dispatch(fetchDevices());
    }

    render() {
        return (
            <Provider store={store}>
                <main className="soundmixer">
                    <SelectedDevice />
                    <SessionList />
                </main>
            </Provider>
        );
    }
}

export default new AppModel("SoundMixer", "/soundmixer", SoundMixer, icon);
