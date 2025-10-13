'use client'
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from '../common/error-msg';

type FormData = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(6).label("Password"),
});

const LoginForm = () => {
  const {register,handleSubmit,reset,formState: { errors }} = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data:FormData) => {
    alert(JSON.stringify(data))
    reset()
  });
  return (
    <form onSubmit={onSubmit}>
      <div className="tptrack__id mb-10">
        <div className="tpsign__input">
          <span>
            <i className="fal fa-user"></i>
          </span>
          <input id='email' {...register("email")} type="email" placeholder="Username / email address" />
        </div>
          <ErrorMsg msg={errors.email?.message!} />
      </div>
      <div className="tptrack__email mb-10">
        <div className="tpsign__input">
          <span>
            <i className="fal fa-key"></i>
          </span>
          <input id='password' {...register("password")} type="text" placeholder="Password" />
        </div>
        <ErrorMsg msg={errors.password?.message!} />
      </div>
      <div className="tpsign__remember d-flex align-items-center justify-content-between mb-15">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault2"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault2">
            Remember me
          </label>
        </div>
        <div className="tpsign__pass">
          <a href="#">Forget Password</a>
        </div>
      </div>
      <div className="tptrack__btn">
        <button type="submit" className="tptrack__submition active">
          Login Now<i className="fal fa-long-arrow-right"></i>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
