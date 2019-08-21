import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('handles roll!', () => {
  const {getByText, getAllByText} = render(
    <App />
  )

  fireEvent.click(getByText('Roll!'))

  expect(getAllByText(/value: \d+/)).toHaveLength(3)

})
