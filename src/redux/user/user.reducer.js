//reducer = function that gets two properties (state object representing last or initial state, and action = type and payload )
//every reducer gets every single action that gets fired EVEN if those actions are not related to the reducer

//similar to initialise state
const INTIAL_STATE = {
  currentUser: null,
};

//default ES6 feature meaning that if state is ever undefined it will fall back and leverage the default state

const userReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state, //stuff that is already in the state
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
