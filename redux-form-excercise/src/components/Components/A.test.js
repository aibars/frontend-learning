import React from 'react';
import { shallow } from 'enzyme';

import A from './A';

describe('A', () => {
  it('works ok', () => {
    const component = shallow((
      <A
        values={{
          href: 'http://www.google.com',
          label: 'Click me!',
        }}
      />
    ));

    expect(component).toMatchSnapshot();
  });
});
