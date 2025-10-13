'use client'
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from 'next/link';
import ErrorMsg from '../common/error-msg';

type FormData = {
  name: string;
  email: string;
  password: string;
};

const schema = yup.object().shape({
  name: yup.string().required().label("Name"),
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(6).label("Password"),
});

const RegisterForm = () => {
  const {register,handleSubmit,reset,formState: { errors }} = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data) => {
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
          <input id='name' {...register("name")} type="text" placeholder="User name" />
        </div>
        <ErrorMsg msg={errors.name?.message!} />
      </div>
      <div className="tptrack__id mb-10">
        <div className="tpsign__input">
          <span>
            <i className="fal fa-envelope"></i>
          </span>
          <input id='email' {...register("email")} type="email" placeholder="Email address" />
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
      <div className="tpsign__account mb-15">
        <Link href="/login">Already Have Account?</Link>
      </div>
      <div className="tptrack__btn">
        <button type="submit" className="tptrack__submition tpsign__reg">
          Register Now<i className="fal fa-long-arrow-right"></i>
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
