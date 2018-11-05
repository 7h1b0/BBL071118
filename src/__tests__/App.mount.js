import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

describe('<App />', () => {
  it('should render Hello Word', () => {
    const wrapper = mount(<App />);
    expect(wrapper.exists('.amazing-bbl')).toBeFalsy();

    wrapper.find('button').simulate('click');
    expect(wrapper.find('.amazing-bbl').text()).toBe('BBL');

    wrapper.find('button').simulate('click');
    expect(wrapper.exists('.amazing-bbl')).toBeFalsy();
  });
});
