import axios from 'axios';

const URL = 'http://127.0.0.1:3030/api';

export const update = content => {
  return async (dispatch, getState) => {
    await dispatch({
      type: 'DOC_CONTENT_CHANGED',
      content
    });

    const doc = getState().doc;
    axios.put(`${URL}/document/${doc._id}`, doc);
  }
}
