import React from 'react';
import ReactDOM from 'react-dom';
import App from './archived/App_2';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
