export const ADD_COMPONENT = 'ADD_COMPONENT';
export const addComponent = (id, layout) => ({
  type: ADD_COMPONENT,
  id,
  layout,
});

export const UPDATE_COMPONENT = 'UPDATE_COMPONENT';
export const updateComponent = (id, data) => ({
  type: UPDATE_COMPONENT,
  id,
  data,
});

export const SET_EDITED_COMPONENT = 'SET_EDITED_COMPONENT';
export const setEditedComponent = component => ({
  type: SET_EDITED_COMPONENT,
  component,
});

export const REMOVE_COMPONENT = 'REMOVE_COMPONENT';
export const removeComponent = component => ({
  type: REMOVE_COMPONENT,
  component,
});
