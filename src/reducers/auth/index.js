import { ActionTypes } from 'constants/auth/general.constant';

const initialState = {
  email: '',
  role: 0, //0 is normal user, 1 is admin user
  isAuthenticated: false, // if user successfully login

  isLoading: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET:
      const updatedState = {
        ...state,
        [action.payload.key]: action.payload.value,
      };
      return updatedState;
    case ActionTypes.RESET:
      return initialState;
    default:
      return state;
  }
}

export default reducer;
