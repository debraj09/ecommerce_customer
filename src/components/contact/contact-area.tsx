import Image from 'next/image';
import React from 'react';

// contact item 
// prop type for contact item
type IProps = {
  img:string
  title:string
  add:string
  phone:string
  email:string
}
function ContactItem ({img,title,add,phone,email}:IProps) {
  return (
    <div className="col-lg-3 col-md-6">
        <div className="tpcontact mb-30">
          <div className="tpcontact__img mb-15 w-img">
              <Image src={`/assets/img/banner/contact-big-bg${img}.jpg`} alt="contact-img" width={330} height={200} style={{height: 'auto'}}/>
          </div>
          <div className="tplocation__text">
              <h4 className="tplocation__text-title">{title}</h4>
              <div className="tplocation__content tplocation__content-two">
                <ul>
                    <li>
                      <a href="#">Add: {add} </a>
                    </li>
                    <li>
                      <a href="tel:012345678">Phone: {phone}</a>
                    </li>
                    <li>
                      <a href="mailto:orfarm@google.com">Email: {email}</a>
                    </li>
                </ul>
              </div>
          </div>
        </div>
    </div>
  )
}

const ContactArea = () => {
  return (
  <section className="contact-area mb-45">
      <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
                <div className="tpcontact-inner text-center mt-20 mb-40">
                  <div className="tpcontact-inner-text">
                      <h5 className="tpcontact-inner-sub-title">Contact us</h5>
                      <h5 className="tpcontact-inner-title mb-20">Looking For Orfarm?</h5>
                      <p>The liber tempor cum soluta nobis eleifend option congue doming quod mazim.</p>
                  </div>
                </div>
            </div>
          </div>
          <div className="row">
            <ContactItem img="1" title="Rue Pelleport - Paris" add="Heaven Stress, Beverly Melbourne" phone="(+100) 123 456 7890" email="Orfarm@google.com"/>
            <ContactItem img="2" title="Prospect - New York" add="Heaven Stress, Beverly Melbourne" phone="(+100) 123 456 8899" email="Orfarm@google.com"/>
            <ContactItem img="3" title="Budapest - Hungary" add="Heaven Stress, Beverly Melbourne" phone="(+100) 123 456 7755" email="Orfarm@google.com"/>
            <ContactItem img="4" title="Kastrup - Denmark" add="Heaven Stress, Beverly Melbourne" phone="(+100) 123 456 5544" email="Orfarm@google.com"/>
          </div>
      </div>
    </section>
  );
};

export default ContactArea;