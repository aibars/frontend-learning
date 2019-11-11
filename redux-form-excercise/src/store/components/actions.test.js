import * as actions from './actions';

describe('componentsActions', () => {
  it('addComponent creates ADD_COMPONENT action', () => {
    expect(
      actions.addComponent(1, 1),
    ).toEqual({
      type: actions.ADD_COMPONENT,
      id: 1,
      layout: 1,
    });
  });

  it('updateComponent creates UPDATE_COMPONENT action', () => {
    expect(
      actions.updateComponent(1, { layout: 2, values: { text: 'Hello World' } }),
    ).toEqual({
      type: actions.UPDATE_COMPONENT,
      id: 1,
      data: {
        layout: 2,
        values: { text: 'Hello World' },
      },
    });
  });

  it('removeComponent creates REMOVE_COMPONENT action', () => {
    expect(
      actions.removeComponent(1),
    ).toEqual({
      type: actions.REMOVE_COMPONENT,
      id: 1,
    });
  });

  it('setEditedComponent creates SET_EDITED_COMPONENT action', () => {
    expect(
      actions.setEditedComponent(1),
    ).toEqual({
      type: actions.SET_EDITED_COMPONENT,
      component: 1,
    });
  });

  it('setEditedComponent creates SET_EDITED_COMPONENT action with null component', () => {
    expect(
      actions.setEditedComponent(null),
    ).toEqual({
      type: actions.SET_EDITED_COMPONENT,
      component: null,
    });
  });
});
