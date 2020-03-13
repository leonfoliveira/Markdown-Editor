const INITIAL_STATE = {
  title: 'newdocument',
  content: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DOC_TITLE_CHANGED':
      return { ...state, title: action.title }
    case 'DOC_CONTENT_CHANGED':
      return { ...state, content: action.content }
    default:
      return state;
  }
}
