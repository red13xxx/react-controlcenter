import React from 'react';
import ReactDOM from 'react-dom';

import Mixer from './Mixer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Mixer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
