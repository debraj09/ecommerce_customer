import React from "react";
import Image from "next/image";
import bg from '@/assets/img/banner/contact-bg-1.jpg';

const LocationAreaTwo = () => {
  return (
    <div className="location-area pt-80 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="tplocation mb-30">
              <div className="tplocation__thumb w-img">
                <Image src={bg} alt="bg-img" style={{ height: "auto" }} />
              </div>
              <div className="tplocation__content">
                <ul>
                  <li>
                    <a href="#">Add: Heaven Stress, Beverly, Melbourne</a>
                  </li>
                  <li>
                    <a href="tel:012345678">Phone: (+100) 123 456 7890</a>
                  </li>
                  <li>
                    <a href="mailto:orfarm@google.com">
                      Email: Orfarm@google.com
                    </a>
                  </li>
                  <li>
                    <a href="#">Website: http://www.orfarm.com/</a>
                  </li>
                  <li>
                    Description: We have more than 100 stores all over the
                    globe. Find the nearest store to <br /> get your favorite
                    stuff.
                  </li>
                  <li>
                    Opening Hours: <span> 09:00 AM - 18:00 PM</span>
                  </li>
                  <li>
                    <a className="tplocation__button mt-15" href="#">
                      Get Directions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tpcontactmap mb-30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d56215.718841453985!2d-0.19959027821222705!3d51.48739183082915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slondon%20eye!5e0!3m2!1sen!2sbd!4v1656749326947!5m2!1sen!2sbd"
                style={{ border: 0 }}
                loading="lazy"
                width="600"
                height="450"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationAreaTwo;
