import React from 'react';
import CountdownTimer from './CountdownTimer';


export default function CntDwn3() {
  // const THREE_DAYS_IN_MS = 4 * 24 * 60 * 60 * 1000-1000000;
  
  const NOW_IN_MS= new Date('2022-07-31T10:00:00.000Z').getTime()
  const dateTimeAfterThreeDays = NOW_IN_MS ;

  return (
    <div>
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
    </div>
  );
}
