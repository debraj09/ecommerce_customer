'use client'
import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from '../common/error-msg';
import { Rating } from "react-simple-star-rating";

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

const ReviewForm = () => {
  const [ratingValue, setRatingValue] = useState(0);
  // Catch Rating value
  const handleRating = (rate:number) => {
    setRatingValue(rate)
  }
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
          <div className="tpreview__star mb-20">
            <h4 className="title">Your Rating</h4>
            <div className="tpreview__star-icon">
              <Rating onClick={handleRating} allowFraction size={16} initialValue={ratingValue} />
            </div>
          </div>
          <div className="tpreview__input mb-30">
            <textarea id='message' {...register("message")} name="text" placeholder="Message"></textarea>
            <ErrorMsg msg={errors.message?.message!} />
            <div className="tpreview__submit mt-30">
              <button className="tp-btn" type='submit'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ReviewForm;
