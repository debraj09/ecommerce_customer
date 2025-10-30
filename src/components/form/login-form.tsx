// LoginForm.tsx
'use client'
import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from '../common/error-msg'; // Assuming this is a valid component

// Base URL for your customer API
const API_BASE_URL: string = 'https://ecomm.braventra.in/api/customer'; 

type FormData = {
  email: string;
  password: string;
};

// Define the component props interface
interface LoginFormProps {
  onLoginSuccess: () => void;
}

const schema = yup.object().shape({
  email: yup.string().required('Email is required.').email('Invalid email format.').label("Email"),
  password: yup.string().required('Password is required.').min(6, 'Password must be at least 6 characters.').label("Password"),
});

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setError('');
    setLoading(true);
    
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        // Use result.error if status code is non-200
        setError(result.error || 'Login failed. Please check your credentials.');
        setLoading(false);
        return;
      }

      // Successful login
      if (result.token) {
        // Store the token and user ID
        localStorage.setItem('authToken', result.token);
        localStorage.setItem('userId', result.user_id.toString()); // Ensure user_id is stored as string
        
        // Call the success handler passed from LoginArea
        onLoginSuccess();
      }

      reset();
    } catch (err: unknown) {
      console.error('Login API error:', err);
      setError('A network or server error occurred.');
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {error && <div className="alert alert-danger mb-3">{error}</div>}
      <div className="tptrack__id mb-10">
        <div className="tpsign__input">
          <span>
            <i className="fal fa-user"></i>
          </span>
          <input 
            id='email' 
            {...register("email")} 
            type="email" 
            placeholder="Username / email address" 
          />
        </div>
        <ErrorMsg msg={errors.email?.message || ''} />
      </div>
      <div className="tptrack__email mb-10">
        <div className="tpsign__input">
          <span>
            <i className="fal fa-key"></i>
          </span>
          <input 
            id='password' 
            {...register("password")} 
            type="password" // Corrected type for security
            placeholder="Password" 
          />
        </div>
        <ErrorMsg msg={errors.password?.message || ''} />
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
        <button type="submit" className="tptrack__submition active" disabled={loading}>
          {loading ? 'Logging In...' : 'Login Now'}
          <i className="fal fa-long-arrow-right"></i>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;