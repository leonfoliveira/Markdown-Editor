const INITIAL_STATE = {
  title: '',
  content: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DOC_TITLE_CHANGED':
      return { title: action.title, ...state }
    case 'DOC_CONTENT_CHANGED':
      return { content: action.content, ...state }
    default:
      return state;
  }
}
