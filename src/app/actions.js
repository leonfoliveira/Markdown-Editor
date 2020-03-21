import axios from 'axios';

const URL = 'http://127.0.0.1:3030/api';

export const contentChange = content => {
  return async (dispatch, getState) => {
    await dispatch({
      type: 'DOC_CONTENT_CHANGED',
      content
    });

    const doc = getState().doc;
    axios.put(`${URL}/document/${doc._id}`, doc);
  }
}

export const getDocuments = () => {
  return async (dispatch, getState) => {
    const doc = await axios.get(`${URL}/document/?user=${getState().user._id}`);

    dispatch({
      type: 'USER_DOCS_CHANGED',
      documents: doc.data
    });
  }
}

export const login = email => {
  return async dispatch => {
    const res = await axios.get(`${URL}/user/?email=${email}`);    

    if (res.status === 200) {
      dispatch({
        type: 'USER_LOGIN',
        user: { ...res.data }
      });
    }
  }
}

export const titleChange = title => {
  return async (dispatch, getState) => {
    if (title.length === 0) title = 'newdocument';
    
    await dispatch({
      type: 'DOC_TITLE_CHANGED',
      title
    });

    const doc = getState().doc;
    axios.put(`${URL}/document/${doc._id}`, doc);
  }
}

export const sidebarShow = () => {
  return async (dispatch, getState) => {
    dispatch({ type: 'SIDEBAR_SHOW' })
  }
}

export const openDocument = doc => {
  return dispatch => {
    dispatch({
      type: 'DOC_OPENED',
      doc
    });
  }
}

export const newDocument = () => {
  return async (dispatch, getState) => {
    const user = getState().user._id;

    const res = await axios.post(`${URL}/document`, { user });
    await dispatch(openDocument(res.data));
    dispatch(getDocuments());
  }
}

export const deleteDocument = id => {
  return async (dispatch, getState) => {
    await axios.delete(`${URL}/document/${id}`);
    await dispatch(getDocuments());

    if (getState().doc._id === id) dispatch({ type: 'DOC_CLOSED' });
  }
}

export const addMark = mark => {
  return async (dispatch, getState) => {
    await dispatch({
      type: 'DOC_CONTENT_CHANGED',
      content: `${getState().doc.content}${mark}`
    });

    const doc = getState().doc;
    axios.put(`${URL}/document/${doc._id}`, doc);
  }
}
