// RegisterForm.tsx
'use client'
import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from 'next/link';
import ErrorMsg from '../common/error-msg'; // Assuming this is a valid component

// Base URL for your customer API
const API_BASE_URL: string = 'https://ecomm.braventra.in/api/customer'; 

type FormData = {
  name: string;
  email: string;
  phone_number: string;
  address: string;
  password: string;
  confirm_password: string;
};

// Define the component props interface
interface RegisterFormProps {
  onRegisterSuccess: () => void;
}

const schema = yup.object().shape({
  name: yup.string().required('Name is required.').label("Name"),
  email: yup.string().required('Email is required.').email('Invalid email format.').label("Email"),
  phone_number: yup.string().required('Phone number is required.').label("Phone Number"), 
  address: yup.string().required('Address is required.').label("Address"), 
  password: yup.string().required('Password is required.').min(6, 'Password must be at least 6 characters.').label("Password"),
  confirm_password: yup.string()
    .required('Confirm Password is required.')
    .oneOf([yup.ref('password')], 'Passwords must match.') 
    .label("Confirm Password"),
});

const RegisterForm: React.FC<RegisterFormProps> = ({ onRegisterSuccess }) => {
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setError('');
    setSuccess('');
    setLoading(true);

    // The data object already matches the post data structure now
    const postData = data; 

    try {
      const response = await fetch(`${API_BASE_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      const result = await response.json();

      if (!response.ok) {
        // Handle backend errors (e.g., Email already registered)
        setError(result.error || 'Registration failed. Please try again.');
        setLoading(false);
        return;
      }

      // Successful registration
      if (result.token) {
        localStorage.setItem('authToken', result.token);
        localStorage.setItem('userId', result.user_id.toString());
        
        setSuccess('Registration successful! Redirecting to dashboard...');
        
        // Call the success handler after a brief delay for user to read the message
        setTimeout(() => onRegisterSuccess(), 1000); 
      }

      reset();
    } catch (err: unknown) {
      console.error('Signup API error:', err);
      setError('A network or server error occurred.');
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {error && <div className="alert alert-danger mb-3">{error}</div>}
      {success && <div className="alert alert-success mb-3">{success}</div>}
      
      {/* Name Field */}
      <div className="tptrack__id mb-10">
        <div className="tpsign__input">
          <span><i className="fal fa-user"></i></span>
          <input id='name' {...register("name")} type="text" placeholder="User name" />
        </div>
        <ErrorMsg msg={errors.name?.message || ''} />
      </div>

      {/* Email Field */}
      <div className="tptrack__id mb-10">
        <div className="tpsign__input">
          <span><i className="fal fa-envelope"></i></span>
          <input id='email' {...register("email")} type="email" placeholder="Email address" />
        </div>
        <ErrorMsg msg={errors.email?.message || ''} />
      </div>

      {/* Phone Number Field */}
      <div className="tptrack__id mb-10">
        <div className="tpsign__input">
          <span><i className="fal fa-phone"></i></span>
          <input id='phone_number' {...register("phone_number")} type="text" placeholder="Phone Number" />
        </div>
        <ErrorMsg msg={errors.phone_number?.message || ''} />
      </div>

      {/* Address Field */}
      <div className="tptrack__id mb-10">
        <div className="tpsign__input">
          <span><i className="fal fa-map-marker-alt"></i></span>
          <input id='address' {...register("address")} type="text" placeholder="Address" />
        </div>
        <ErrorMsg msg={errors.address?.message || ''} />
      </div>
      
      {/* Password Field */}
      <div className="tptrack__email mb-10">
        <div className="tpsign__input">
          <span><i className="fal fa-key"></i></span>
          <input id='password' {...register("password")} type="password" placeholder="Password" />
        </div>
        <ErrorMsg msg={errors.password?.message || ''} />
      </div>

      {/* Confirm Password Field */}
      <div className="tptrack__email mb-10">
        <div className="tpsign__input">
          <span><i className="fal fa-lock"></i></span>
          <input id='confirm_password' {...register("confirm_password")} type="password" placeholder="Confirm Password" />
        </div>
        <ErrorMsg msg={errors.confirm_password?.message || ''} />
      </div>

      <div className="tpsign__account mb-15">
        <Link href="/login">Already Have Account?</Link>
      </div>

      <div className="tptrack__btn">
        <button type="submit" className="tptrack__submition tpsign__reg" disabled={loading}>
          {loading ? 'Registering...' : 'Register Now'}
          <i className="fal fa-long-arrow-right"></i>
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;