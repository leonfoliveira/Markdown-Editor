const INITIAL_STATE = {
  logged: false,
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
    case 'USER_DOCS_CHANGED':
      return { ...state, documents: action.documents }
    default:
      return state;
  }
}
