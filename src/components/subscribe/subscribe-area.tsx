import Image from "next/image";
import React from "react";

// prop type 
type IProps = {
  cls?: string;
}

const SubscribeArea = ({cls=''}: IProps) => {
  return (
    <div className={`subscribe-area ${cls}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-10 col-lg-12 col-sm-12">
            <div className="tpsubscribe__item">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="tpsubscribe__content">
                    <p>
                      Subscribe to the Orfarm mailing list to receive updates{" "}
                      <br />
                      on new arrivals & other information.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="tpsubscribe__form p-relative">
                    <form action="#">
                      <span>
                        <i>
                          <Image src="/assets/img/shape/message-1.svg" alt="icon" width={18} height={15} />
                        </i>
                      </span>
                      <input type="email" placeholder="Your email address..." />
                      <button className="tpsubscribe__form-btn">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeArea;
