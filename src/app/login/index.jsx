import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import './style.css';

import LoginForm from './form';

export default () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await axios.get(`http://127.0.0.1:3030/api/user/?email=${user.email}`);

    if (res.data[0]) {
      dispatch({
        type: 'USER_LOGIN',
        user: res.data[0]
      });
    }
  }

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
