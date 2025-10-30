// LoginArea.tsx
'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoginForm from '../form/login-form';
import RegisterForm from '../form/register-form';
import ProfileSection from '../profile/ProfileSection'; // Import the new component

const LoginArea: React.FC = () => {
  // Initialize state based on localStorage check
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    // Check for stored token on initial load
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }
    // If a token is NOT found, stay on the page to show forms
  }, []);
  
  // This state is used for the conditional rendering logic
  const handleAuthSuccess = (): void => {
    // Sets logged in state, ProfileSection will handle redirection later if needed
    setIsLoggedIn(true); 
  };

  return (
    <section className="track-area pb-40">
      <div className="container">
        <div className="row justify-content-center">
          
          {isLoggedIn ? (
            // --- LOGGED IN STATE ---
            <ProfileSection />
          ) : (
            // --- LOGGED OUT STATE: Show Forms ---
            <>
              {/* LOGIN FORM COLUMN */}
              <div className="col-lg-6 col-sm-12">
                <div className="tptrack__product mb-40">
                  <div className="tptrack__content grey-bg">
                    <div className="tptrack__item d-flex mb-20">
                      <div className="tptrack__item-icon">
                        <i className="fal fa-user-unlock"></i>
                      </div>
                      <div className="tptrack__item-content">
                        <h4 className="tptrack__item-title">Login Here</h4>
                        <p>Your personal data will be used to support your experience throughout this website, to manage access to your account.</p>
                      </div>
                    </div>
                    <LoginForm onLoginSuccess={handleAuthSuccess} />
                  </div>
                </div>
              </div>

              {/* REGISTER FORM COLUMN */}
              <div className="col-lg-6 col-sm-12">
                <div className="tptrack__product mb-40">
                  <div className="tptrack__content grey-bg">
                    <div className="tptrack__item d-flex mb-20">
                      <div className="tptrack__item-icon">
                        <i className="fal fa-lock"></i>
                      </div>
                      <div className="tptrack__item-content">
                        <h4 className="tptrack__item-title">Sign Up</h4>
                        <p>Create your account for a better experience on our website.</p>
                      </div>
                    </div>
                    <RegisterForm onRegisterSuccess={handleAuthSuccess} />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default LoginArea;