const INITIAL_STATE = {
  visible: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SIDEBAR_SHOW':
      return { visible: true }
    case 'SIDEBAR_HIDE':
      return { visible: false }
    default:
      return state;
  }
}
