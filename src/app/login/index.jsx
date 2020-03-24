import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './style.css';

import LoginForm from './form';
import { login, openDocument, getDocuments } from '../actions';

export default () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch([
      login(e.target.value),
      getDocuments(),
      openDocument(user.documents[0])
    ]);
  }

  /*
  ** Temporary auto login
  */
  dispatch([
    login('sample@sample'),
    getDocuments()
  ]);
  /*
  ** Temporary auto login
  */

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
