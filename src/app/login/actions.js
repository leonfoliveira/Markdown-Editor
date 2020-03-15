import axios from 'axios';

const URL = 'http://127.0.0.1:3030/api';

export const login = email => {
  return async dispatch => {
    const res = await axios.get(`${URL}/user/?email=${email}`);

    if (res.status === 200) {
      const doc = await axios.get(`${URL}/document/?user=${res.data._id}`);

      dispatch({
        type: 'USER_LOGIN',
        user: { ...res.data, documents: doc.data }
      });
    }
  }
}
