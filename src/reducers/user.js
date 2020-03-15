const INITIAL_STATE = {
  logged: false,
  email: 'sample@sample',
  password: '123'
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return { logged: true, ...action.user }
    case 'USER_LOGOUT':
      return INITIAL_STATE;
    case 'USER_EMAIL_CHANGED':
      return { ...state, email: action.email }
    case 'USER_PASSWORD_CHANGED':
        return { ...state, password: action.password }
    default:
      return state;
  }
}
