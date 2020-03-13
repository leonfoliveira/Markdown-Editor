const INITIAL_STATE = {
  logged: false,
  auth: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return { logged: true, auth: action }
    case 'USER_LOGOUT':
      return INITIAL_STATE;
    default:
      return state;
  }
}
