import React from 'react';
import CountdownTimer from './CountdownTimer';


export default function CntDwn2() {
  // const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS= new Date('2022-07-24T10:00:00.000Z').getTime()
  const dateTimeAfterThreeDays = NOW_IN_MS ;

  return (
    <div>
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
    </div>
  );
}
