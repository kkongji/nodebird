const initialState = {
  isLoggedIn: false,
  user: null
};

//action의 이름
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

export const loginAction = {
  type: LOG_IN,
  data: {
    nickname: "준영",
  },
};

export const logoutAction = {
  type: LOG_OUT,
}

// isLoggedIn, user
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        user: action.data
      }
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null
      }
    }
    default: {
      return;
    }
  }
};

export default reducer;