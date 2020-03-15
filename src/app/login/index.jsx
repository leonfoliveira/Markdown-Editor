import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import './style.css';

import LoginForm from './form';

export default () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    if (e) e.preventDefault();

    const res = await axios.get(`http://127.0.0.1:3030/api/user/?email=${user.email}`);

    if (res.status === 200) {
      const doc = await axios.get(`http://127.0.0.1:3030/api/document/?user=${res.data._id}`);

      dispatch({
        type: 'USER_LOGIN',
        user: { ...res.data, documents: doc.data }
      });
    }

    console.log(user);
  }

  handleLogin();

  return (
    <div className="login">
      <LoginForm
        user={user}
        emailChange={(e) => dispatch({
          type: 'USER_EMAIL_CHANGED',
          email: e.target.value
        })}
        passwordChange={(e) => dispatch({
          type: 'USER_PASSWORD_CHANGED',
          password: e.target.value
        })}
        handleLogin={handleLogin}
      />
    </div>
  )
}
