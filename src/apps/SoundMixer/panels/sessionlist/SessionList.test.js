import React from 'react';
import ReactDOM from 'react-dom';

import SessionList from './SessionList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SessionList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
