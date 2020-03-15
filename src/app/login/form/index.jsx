import React from 'react';

export default props => (
  <form className="login-form" onSubmit={props.handleLogin}>
    <input
      type="email"
      className="login-email"
      placeholder="Email"
      value={props.user.email}
      onChange={props.emailChange}
    />
    <input
      type="password"
      className="login-password"
      placeholder="Password"
      value={props.user.password}
      onChange={props.passwordChange}
    />
    <input
      type="submit"
      className="login-submit"
      value="Login"      
    />
  </form>
)
