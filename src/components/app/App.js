import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Switch, Route} from 'react-router-dom'

import SoundMixer from '../../apps/SoundMixer/SoundMixer';
import Test1 from '../../apps/Test1/Test1';
import Footer from '../footer/Footer';
import './App.css';

const apps = [
    SoundMixer,
    Test1
]

class App extends Component {

    routes = apps.map(
        (app) => {
            return (
                <Route path={app.Path} component={app.AppComponent} />
            );
        }
    )

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <main>
                        <Switch>
                            {this.routes}
                        </Switch>
                    </main>
                    <Footer apps={apps}/>
                </div>
            </MuiThemeProvider>
        );
    };
}


export default App;
