import React from 'react';
import { shallow } from 'enzyme';

import Navbar from '.';

describe('Navbar', () => {
  it('works ok', () => {
    const component = shallow(<Navbar />);

    expect(component).toMatchSnapshot();
  });
});
