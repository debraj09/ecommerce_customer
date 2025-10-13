'use client';
import dynamic from 'next/dynamic';
import React from 'react';
import { useTimer } from 'react-timer-hook';

// prop type 
type IProps = {
  expiryTimestamp: Date;
  cls?: string;
}

const CountdownTimer = ({expiryTimestamp,cls}:IProps) => {
  const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp });
  return (
    <div className={`tpcoundown__countdown ${cls?cls:''}`} data-countdown="2024/06/11">
      <span className="cdown days">
        <span className="time-count">{days}</span> <p>Days</p>
      </span>
      <span className="cdown hour">
        <span className="time-count">{hours}</span> <p>Hour</p>
      </span>
      <span className="cdown minutes">
        <span className="time-count">{minutes}</span> <p>Minute</p>
      </span>
      <span className="cdown second">
        <span>
          <span className="time-count">{seconds}</span> <p>Second</p>
        </span>
      </span>
    </div>
  );
};

export default dynamic(() => Promise.resolve(CountdownTimer), {
  ssr: false
})