import React from "react";

import { useNavigate } from "react-router-dom";

const StudentRegister = () => {
  const navigate = useNavigate();

  const submit = () => {
    navigate("/student-login");
  };
  const back = () => {
    navigate(-1);
  };
  return (
    <div className="login-main">

    <div className="login-content">
      <h1> تسجيل الطالب</h1>

      <div className="top">
        <input
          type="text"
          className="form-control"
          placeholder="اسم المستخدم"
          required
        />
        <input
          type="text"
          className="form-control"
          placeholder="كلمة السر"
          required
        />
        <input
          type="email"
          className="form-control"
          placeholder="البريد الالكتروني"
          required
        />
        <input
          type="number"
          className="form-control"
          placeholder="رقم الجوال"
          required
        />
        <input
          type="number"
          className="form-control"
          placeholder="العمر"
          required
        />
      </div>
      <div className="bottom">
        <button onClick={submit} type="button" className="button-64">
          <span className="text">سجل </span>
        </button>
        <button onClick={back} type="button" className="button-64">
          <span className="text">ارجع </span>
        </button>
        </div>
        </div>
    </div>
  );
};

export default StudentRegister;
