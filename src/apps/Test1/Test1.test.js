import React from 'react';
import ReactDOM from 'react-dom';

import Test1 from './Test1';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Test1 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
