import { createStore } from 'redux';

import rootReducer from './rootReducer';
import { initialState } from './components/reducer';

describe('rootReducer', () => {
  it('has necessary reducers injected', () => {
    const store = createStore(rootReducer);

    expect(
      store.getState().components,
    ).toEqual(initialState);

    expect(
      store.getState().form,
    ).toEqual({});
  });
});
