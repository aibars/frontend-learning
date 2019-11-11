import * as actions from './actions';

const initialState = {
  currentlyEdited: null,
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_COMPONENT:
      return {
        currentlyEdited: Object.assign({}, state, { currentlyEdited: { id: action.id, layout: action.layout, values: {} }, items: [] })
      };
    case actions.UPDATE_COMPONENT:
      return {
        ...initialState,
        items: state.items.map((item, index) => {
          if (item.id === action.id) {
            return {
              layout: action.data.layout,
              values: action.data.values,
              id: action.id
            }
          }
          return item;
        })
      };
    case actions.REMOVE_COMPONENT:
      return {
        ...initialState,
        items: state.items.filter((item, index) => {
          if (item.id !== action.component) {
            return true;
          }
          return false;
        })
      }
    case actions.SET_EDITED_COMPONENT:

      let edited;
      var items = [];
      state.items.forEach((item, index) => {
        if (item.id === action.component.id) {
          edited = item;
        }
        return items.push(item);
      });
      return {
        ...initialState,
        currentlyEdited: edited,
        items: items
      }
    default:
      return state;
  }
};

export {
  initialState,
  reducer,
};
