import React from 'react';
import { shallow } from 'enzyme';

import Img from './Img';

describe('Img', () => {
  it('works ok', () => {
    const component = shallow((
      <Img
        values={{
          alt: 'Cool image',
          src: 'http://lorempixel.com/400/200',
        }}
      />
    ));

    expect(component).toMatchSnapshot();
  });
});
