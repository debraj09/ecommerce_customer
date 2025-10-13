import React from 'react';
import ContactForm from '../form/contact-form';

const ContactMapForm = () => {
  return (
    <section className="map-area tpmap__box">
        <div className="container">
            <div className="row gx-0">
              <div className="col-lg-6 col-md-6 order-2 order-md-1 z-index-1">
                  <div className="tpmap__wrapper">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d56215.718841453985!2d-0.19959027821222705!3d51.48739183082915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slondon%20eye!5e0!3m2!1sen!2sbd!4v1656749326947!5m2!1sen!2sbd" style={{border:0}}  loading="lazy" width="600" height="450"></iframe>
                  </div>
              </div>
              <div className="col-lg-6 col-md-6 order-1 order-md-2">
                  <div className="tpform__wrapper pt-120 pb-80 ml-60">
                    <h4 className="tpform__title">LEAVE A REPLY</h4>
                    <p>Your email address will not be published. Required fields are marked *</p>
                    <div className="tpform__box">
                       {/* contact form */}
                       <ContactForm/>
                       {/* contact form */}
                    </div>
                  </div>
              </div>
            </div>
        </div>
    </section>
  );
};

export default ContactMapForm;