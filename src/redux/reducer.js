import {LOGGEDIN, LOGGEDINAS, USERS} from './reduxContstants';

const initialState = {
  loggedIn: false,
  loggedInAs: null,
  users: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGEDIN:
      return {
        ...state,
        loggedIn: action.LOGGEDIN,
      };
    case LOGGEDINAS:
      return {
        ...state,
        loggedInAs: action.LOGGEDINAS,
      };
    case USERS:
      return {
        ...state,
        users: action.USERS,
      };
  }
};
