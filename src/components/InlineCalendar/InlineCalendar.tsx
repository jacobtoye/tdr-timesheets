import * as React from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';

import './InlineCalendar.css';

export const InlineCalendar: React.FC<{}> = () => {
  return (
    <Calendar
      value={new Date(2019, 8, 9)}
      className="tdr-calendar"
      minDetail="month"
      next2Label={null}
      prev2Label={null}
    />
  );
};
