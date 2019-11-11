import React from 'react';
import { shallow } from 'enzyme';

import { ComponentsPicker } from '.';

describe('ComponentsPicker', () => {
  it('uses proper classes when lockedPicker is true', () => {
    const component = shallow((
      <ComponentsPicker
        lockedPicker
        onComponentClick={() => {}}
      />
    ));

    expect(
      component
        .children()
        .at(0)
        .hasClass('components-picker__component--disabled'),
    ).toBeTruthy();
  });

  it('calls onComponentClick on click when lockedPicker is false', () => {
    const onComponentClickMock = jest.fn();

    const component = shallow((
      <ComponentsPicker
        lockedPicker={false}
        onComponentClick={onComponentClickMock}
      />
    ));

    component
      .children()
      .at(0)
      .simulate('click');

    expect(
      onComponentClickMock.mock.calls.length,
    ).toEqual(1);
  });

  it('does not call onComponentClick on click when lockedPicker is true', () => {
    const onComponentClickMock = jest.fn();

    const component = shallow((
      <ComponentsPicker
        lockedPicker
        onComponentClick={onComponentClickMock}
      />
    ));

    component
      .children()
      .at(0)
      .simulate('click');

    expect(
      onComponentClickMock.mock.calls.length,
    ).toEqual(0);
  });
});
