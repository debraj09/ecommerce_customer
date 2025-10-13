import Image from 'next/image';
import React from 'react';


// location item
// prop type for location item
type IProps = {
  img:string;
  title:string;
  add:string;
  phone:string;
  email:string;
  open:string;
} 
function LocationItem({img,title,add,phone,email,open}:IProps) {
  return (
     <div className="tplocation__item d-flex align-items-center">
        <div className="tplocation__img mr-20">
          <Image src={`/assets/img/banner/contact-bg-${img}.jpg`} alt="contact-img" width={300} height={180} style={{height: 'auto'}}/>
        </div>
        <div className="tplocation__text">
          <h4 className="tplocation__text-title">{title}</h4>
          <div className="tplocation__content tplocation__content-two">
              <ul>
                <li>
                    <a href="#">Add: {add}</a>
                </li>
                <li>
                    <a href="tel:012345678">Phone: {phone}</a>
                </li>
                <li>
                    <a href="mailto:orfarm@google.com">Email: {email}</a>
                </li>
                <li>
                    Opening Hours: <span> {open}</span>
                </li>
              </ul>
          </div>
        </div>
    </div>
  )
}

const LocationArea = () => {
  return (
    <section className="location-area pt-80 pb-45">
    <div className="container">
       <div className="row">
          <div className="col-lg-6">
             <div className="tplocation__wrapper mb-30">
              <LocationItem img="1" title="Rue Pelleport - Paris" add="Heaven Stress, Beverly Melbourne" phone="(+100) 123 456 7890" email="Orfarm@google.com" open="09:00 AM - 18:00 PM" />
              <LocationItem img="2" title="Prospect - New York" add="Heaven Stress, Beverly Melbourne" phone="(+100) 123 456 8899" email="Orfarm@google.com" open="09:00 AM - 18:00 PM" />
              <LocationItem img="3" title="Budapest - Hung" add="Heaven Stress, Beverly Melbourne" phone="(+100) 123 456 7755" email="Orfarm@google.com" open="09:00 AM - 18:00 PM" />
              <LocationItem img="4" title="Kastrup - Denmark" add="Heaven Stress, Beverly Contributors" phone="(+100) 123 456 5544" email="Orfarm@google.com" open="09:00 AM - 18:00 PM" />
             </div>
          </div>
          <div className="col-lg-6">
             <div className="tpcontactmap mb-30">
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d56215.718841453985!2d-0.19959027821222705!3d51.48739183082915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slondon%20eye!5e0!3m2!1sen!2sbd!4v1656749326947!5m2!1sen!2sbd" style={{border:0}} loading="lazy" width="600" height="450"></iframe>
             </div>
          </div>
       </div>
    </div>
 </section>
  );
};

export default LocationArea;