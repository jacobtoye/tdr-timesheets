const MILLISECONDS_IN_SECOND = 1000;
const MILLISECONDS_IN_MINUTE = MILLISECONDS_IN_SECOND * 60;
const MILLISECONDS_IN_HOUR = MILLISECONDS_IN_MINUTE * 60;

interface Duration {
  hours?: number;
  minutes?: number;
  seconds?: number;
  milliseconds: number;
}

export const duration = (ms: number): Duration => {
  let milliseconds = Math.abs(ms);

  const hours = Math.floor(milliseconds / MILLISECONDS_IN_HOUR);
  milliseconds = milliseconds % MILLISECONDS_IN_HOUR;

  const minutes = Math.floor(milliseconds / MILLISECONDS_IN_MINUTE);
  milliseconds = milliseconds % MILLISECONDS_IN_MINUTE;

  const seconds = Math.floor(milliseconds / MILLISECONDS_IN_SECOND);
  milliseconds = milliseconds % MILLISECONDS_IN_SECOND;

  return {
    hours,
    minutes,
    seconds,
    milliseconds,
  };
};

export const toTimeString = (duration: Duration, includeSeconds = false) => {
  const hours = '' + duration.hours;
  const minutes = ':' + ('00' + duration.minutes).slice(-2);
  const seconds = includeSeconds ? ':' + ('00' + duration.seconds).slice(-2) : '';

  return `${hours}${minutes}${seconds}`;
};
