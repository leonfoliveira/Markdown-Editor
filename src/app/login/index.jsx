import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './style.css';

import LoginForm from './form';
import { login } from '../actions';

export default () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(e.target.value));
  }

  dispatch(login('sample@sample'));

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
