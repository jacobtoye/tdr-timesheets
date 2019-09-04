import TimePeriodType from '../models/TimePeriodType';

const grid = {
  BASELINE: 7,
  MARGIN: 13,
  GUTTER: 11,
  COLUMN: 19,
};

const text = {
  normal: {
    size: 16,
  },
};

const palette = {
  background: {
    MAIN: '#fbf7f0',
    LIGHT: '#faf5ed',
    DARK: '#f5f1ea',
  },
  ERROR: '#cc685e',
  GREY: '#f5f1ea',
  primaryColors: {
    AQUA: '#68B5B1',
    BLUE: '#4C83C0',
    GREEN: '#68B579',
    LIGHT_BLUE: '#62C8D3',
    ORANGE: '#E6A573',
    PINK: '#DF729D',
    PURPLE: '#848CC5',
    RED: '#cc685e',
    YELLOW: '#E5BF73',
  },
  text: {
    PRIMARY: '#645f59',
    SECONDARY: '#a19d96',
    GREY: '#b2aea8',
  },
};

export const theme = {
  grid,
  palette,
  text,
};

export const timePeriodTypeAsColor = (type: TimePeriodType) => {
  switch (type) {
    case TimePeriodType.AnnualLeave:
      return theme.palette.primaryColors.LIGHT_BLUE;
    case TimePeriodType.Normal:
      return theme.palette.primaryColors.BLUE;
    case TimePeriodType.Sick:
      return theme.palette.primaryColors.GREEN;
    case TimePeriodType.Stat:
      return theme.palette.primaryColors.ORANGE;
    case TimePeriodType.Training:
      return theme.palette.primaryColors.YELLOW;
  }
};

export default theme;
