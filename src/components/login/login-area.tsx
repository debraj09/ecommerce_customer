import React from 'react';
import RegisterForm from '../form/register-form';
import LoginForm from '../form/login-form';

const LoginArea = () => {
  return (
    <section className="track-area pb-40">
    <div className="container">
       <div className="row justify-content-center">
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
                 {/* login form start */}
                  <LoginForm/>
                 {/* login form end */}
                </div>
             </div>
          </div>
          <div className="col-lg-6 col-sm-12">
             <div className="tptrack__product mb-40">
                <div className="tptrack__content grey-bg">
                   <div className="tptrack__item d-flex mb-20">
                      <div className="tptrack__item-icon">
                         <i className="fal fa-lock"></i>
                      </div>
                      <div className="tptrack__item-content">
                         <h4 className="tptrack__item-title">Sign Up</h4>
                         <p>Your personal data will be used to support your experience throughout this website, to manage access to your account.</p>
                      </div>
                   </div>
                  {/* register form start */}
                  <RegisterForm/>
                  {/* register form end */}
                </div>
             </div>
          </div>
       </div>
    </div>
 </section>
  );
};

export default LoginArea;