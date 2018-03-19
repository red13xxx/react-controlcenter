import React from 'react';
import ReactDOM from 'react-dom';

import SoundMixer from './SoundMixer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SoundMixer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
