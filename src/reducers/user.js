const INITIAL_STATE = {
  logged: false,
  auth: {
    email: 'sample@sample',
    password: '123'
  },
  docs: [
    { _id: 0, title: 'newDocument1' },
    { _id: 1, title: 'newDocument2' }
  ]
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
