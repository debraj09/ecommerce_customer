'use client';
import React,{useState} from 'react';
import Image from 'next/image';
import video_bg from '@/assets/img/banner/video-bg-1.jpg';
import VideoPopup from '../common/modal/video-popup';

// video item 
function VideoItem ({num,title}:{num:string;title:string}) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="tpvideo__wrapper mb-30">
        <div className="tpvideo__icon mb-5">
            <i>
               {num}
            </i>
        </div>
        <div className="tpvideo__content">
            <h4 className="tpvideo__title">{title}</h4>
            <p>Sed ut perspiciatis unde omnis <br/> iste natus sit accusantium doloremque.</p>
        </div>
      </div>
    </div>
  )
}

const AboutVideoArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return (
    <>
    <section className="video-area pt-80 pb-50">
      <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
                <div className="tpsection mb-35">
                  <h4 className="tpsection__sub-title">~ Good Performance ~</h4>
                  <h4 className="tpsection__title">Our Working Ability</h4>
                  <p>The liber tempor cum soluta nobis eleifend option congue doming quod mazim.</p>
                </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
                <div className="tpvideo__bg p-relative mb-25">
                  <Image src={video_bg} alt="video-img" style={{height:'auto'}}/>
                  <div className="tpvideo__video-btn">
                      <a className="tpvideo__video-icon pointer popup-video" onClick={()=> setIsVideoOpen(true)}>
                        <i>
                            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.6499 6.58886L15.651 6.58953C17.8499 7.85553 18.7829 9.42511 18.7829 10.8432C18.7829 12.2613 17.8499 13.8308 15.651 15.0968L15.6499 15.0975L12.0218 17.195L8.3948 19.2919C8.3946 19.292 8.3944 19.2921 8.3942 19.2922C6.19546 20.558 4.36817 20.5794 3.13833 19.8697C1.9087 19.1602 1.01562 17.5694 1.01562 15.0382V10.8432V6.64818C1.01562 4.10132 1.90954 2.51221 3.13721 1.80666C4.36609 1.1004 6.1936 1.12735 8.3942 2.39416C8.3944 2.39428 8.3946 2.3944 8.3948 2.39451L12.0218 4.49135L15.6499 6.58886Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </i>
                      </a>
                  </div>
                </div>
            </div>
          </div>
          <div className="row">
            <VideoItem num="5465+" title="Active Clients" />
            <VideoItem num="4968+" title="Projects Done" />
            <VideoItem num="565+" title="Team Advisors" />
            <VideoItem num="485+" title="Users Online" />
          </div>
      </div>
    </section>

     <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={'Vgte7oCgNtU'}
      />
    </>
  );
};

export default AboutVideoArea;