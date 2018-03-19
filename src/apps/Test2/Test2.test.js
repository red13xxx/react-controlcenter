import React from 'react';
import ReactDOM from 'react-dom';

import Test2 from './Test2';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Test2 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
