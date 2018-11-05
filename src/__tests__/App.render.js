import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import App from '../App';

describe('<App />', () => {
  it('should render Hello Word', () => {
    const { getByText, queryByText } = render(<App />);
    expect(queryByText('BBL')).toBeNull();

    fireEvent.click(getByText('Toggle me!'));
    expect(getByText('BBL')).toBeDefined();

    fireEvent.click(getByText('Toggle me!'));
    expect(queryByText('BBL')).toBeNull();
  });
});
