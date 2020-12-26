/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './index.css';
// 登陆
function SignIn() {
  /**
   * 定义
   * @param {object} values 登陆参数
   */
  const [values, setValues] = useState({
    phone: '13111111111',
    password: 'q123456',
  });
  /**
   * 登陆-提交
   * @param home 跳转首页
   */
  const loginByPassword = async () => {
    console.log(123);
  };
  // 返回
  return (
    <div className="signIn">
      <div className="row">
        <label htmlFor="signInPhone">手机号</label>
        <input
          id="signInPhone"
          type="tel"
          placeholder="请输入手机号"
          onChange={({ target }) => {
            const obj = { ...values, phone: target.value };
            setValues(obj);
          }}
        />
      </div>
      <div className="row">
        <label htmlFor="signInPassword">密码</label>
        <input
          id="signInPassword"
          type="password"
          placeholder="请输入密码"
          onChange={({ target }) => {
            const obj = { ...values, password: target.value };
            setValues(obj);
          }}
        />
      </div>
      <button type="button" onClick={loginByPassword}>
        登陆,跳转首页
      </button>
    </div>
  );
}

export default SignIn;
