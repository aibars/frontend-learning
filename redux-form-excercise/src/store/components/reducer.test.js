import * as actions from './actions';
import { initialState, reducer } from './reducer';

describe('componentsReducer', () => {
  it('handles ADD_COMPONENT action', () => {
    const expectedState = {
      ...initialState,
      currentlyEdited: {
        id: 1,
        layout: 1,
        values: {},
      },
      items: [{
        id: 1,
        layout: 1,
        values: {},
      }],
    };

    const actualState = reducer(
      initialState,
      actions.addComponent(1, 1),
    );

    expect(expectedState).toEqual(actualState);
  });

  it('handles UPDATE_COMPONENT action', () => {
    const expectedState = {
      ...initialState,
      items: [{
        id: 1,
        layout: 1,
        values: { text: 'Text 1' },
      }, {
        id: 2,
        layout: 1,
        values: { text: 'Text 1' },
      }],
    };

    const actualState = reducer({
      ...initialState,
      items: [{
        id: 1,
        layout: 1,
        values: { text: 'Text 1' },
      }, {
        id: 2,
        layout: 2,
        values: { text: 'Text 2' },
      }],
    },
    actions.updateComponent(2, { layout: 1, values: { text: 'Text 1' } }));

    expect(expectedState).toEqual(actualState);
  });

  it('handles REMOVE_COMPONENT action', () => {
    const expectedState = {
      ...initialState,
      items: [{
        id: 1,
        layout: 1,
        values: { text: 'Text 1' },
      }],
    };

    const actualState = reducer({
      ...initialState,
      items: [{
        id: 1,
        layout: 1,
        values: { text: 'Text 1' },
      }, {
        id: 2,
        layout: 2,
        values: { text: 'Text 2' },
      }],
    }, actions.removeComponent(2));

    expect(expectedState).toEqual(actualState);
  });

  it('handles SET_EDITED_COMPONENT action', () => {
    const expectedState = {
      ...initialState,
      currentlyEdited: {
        id: 1,
        layout: 1,
        values: { text: 'Text 1' },
      },
      items: [{
        id: 1,
        layout: 1,
        values: { text: 'Text 1' },
      }],
    };

    const actualState = reducer({
      ...initialState,
      items: [{
        id: 1,
        layout: 1,
        values: { text: 'Text 1' },
      }],
    }, actions.setEditedComponent({
      id: 1,
      layout: 1,
      values: { text: 'Text 1' },
    }));

    expect(expectedState).toEqual(actualState);
  });
});
