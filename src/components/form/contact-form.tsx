'use client'
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from '../common/error-msg';

type FormData = {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required().label("Name"),
  email: yup.string().required().email().label("Email"),
  subject: yup.string().required().label("subject"),
  phone: yup.string().required().label("Phone"),
  message: yup.string().required().label("Message"),
});

const ContactForm = () => {
  const {register,handleSubmit,reset,formState: { errors }} = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data:FormData) => {
    alert(JSON.stringify(data))
    reset()
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="row gx-7">
        <div className="col-lg-6">
          <div className="tpform__input mb-20">
            <input id='name' {...register("name")} type="text" placeholder="Your Name *" />
            <ErrorMsg msg={errors.name?.message!} />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="tpform__input mb-20">
            <input id='email' {...register("email")} type="email" placeholder="Your Email *" />
            <ErrorMsg msg={errors.email?.message!} />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="tpform__input mb-20">
            <input id='subject' {...register("subject")} type="text" placeholder="Subject *" />
            <ErrorMsg msg={errors.subject?.message!} />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="tpform__input mb-20">
            <input type="text" id='phone' {...register("phone")} placeholder="Phone" />
            <ErrorMsg msg={errors.phone?.message!} />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="tpform__textarea">
            <textarea id='message' {...register("message")} placeholder="Message"></textarea>
            <ErrorMsg msg={errors.message?.message!} />
            <div className="tpform__textarea-check mt-20 mb-25">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="remember"
                />
                <label
                  className="form-check-label"
                  htmlFor="remember"
                >
                  I am bound by the terms of the{" "}
                  <a href="#">Service I accept Privacy Policy.</a>
                </label>
              </div>
            </div>
            <button type='submit'>Send message</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
