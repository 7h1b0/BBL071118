import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('<App />', () => {
  it('should render Hello Word', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('DoctolibBBL').props()).toEqual({ showBBL: false });

    wrapper.find('button').simulate('click');
    expect(wrapper.find('DoctolibBBL').props()).toEqual({ showBBL: true });

    wrapper.find('button').simulate('click');
    expect(wrapper.find('DoctolibBBL').props()).toEqual({ showBBL: false });
  });
});
