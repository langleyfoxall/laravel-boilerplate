/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';

import Example from './Example';

describe('<Login/>', () => {
  it('should render card header successfully', () => {
    const wrapper = shallow(<Example />);
    expect(wrapper.find({ testID: 'card-header' }).contains('Example Component')).toBe(true);
  });
});