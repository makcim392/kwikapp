const initialState = {
    items: [], // Initialize an empty array to store the items
  };

  const itemReducer = (state = initialState, action) => {
    console.log('items in itemReducer: ', state.items);
    switch (action.type) {
      case 'ADD_ITEM':
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      default:
        return state;
    }
  };

  export default itemReducer;
