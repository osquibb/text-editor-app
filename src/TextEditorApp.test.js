import React from 'react';
import ReactDOM from 'react-dom';
import TextEditorApp from './TextEditorApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextEditorApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
