'use client'
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from '../common/error-msg';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required().label("Name"),
  email: yup.string().required().email().label("Email"),
  message: yup.string().required().label("Message"),
});

const BlogDetailsForm = () => {
  const {register,handleSubmit,reset,formState: { errors }} = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data:FormData) => {
    alert(JSON.stringify(data))
    reset()
  });
  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-lg-6">
          <div className="tpreview__input mb-30">
            <input id='name' {...register("name")} type="text" placeholder="Name" />
            <ErrorMsg msg={errors.name?.message!} />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="tpreview__input mb-30">
            <input id='email' {...register("email")} type="email" placeholder="Email" />
            <ErrorMsg msg={errors.email?.message!} />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="tpreview__input mb-5">
            <textarea id='message' {...register("message")} name="text" placeholder="Message"></textarea>
            <ErrorMsg msg={errors.message?.message!} />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="tpfooter__widget-newsletter-check postbox__check-box">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="remember"
              />
              <label className="form-check-label" htmlFor="remember">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>
          </div>
          <div className="tpreview__submit mt-25">
            <button className="tp-btn" type='submit'>Post Comment</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BlogDetailsForm;
