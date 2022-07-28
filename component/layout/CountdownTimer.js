import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from './useCountdown';
import CntDwn3 from './CntDwn3'
import CntDwn0701 from './CntDwn0701';
import CntDwn2 from './CntDwn2';
const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
          <CntDwn2/>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes,seconds }) => {
  return (
    <div className="show-counter">
      <a
        className="countdown-link"
      >
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        <p style={{color:'white',}}> &nbsp;</p>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <p style={{color:'white',}}> &nbsp;</p>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <p style={{color:'white',}}> &nbsp;</p>
        <DateTimeDisplay value={seconds} type={'Secs'} isDanger={false} />

      </a>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <CntDwn2/>;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;

  

