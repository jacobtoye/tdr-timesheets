import TimePeriodType from 'models/TimePeriodType';

const grid = {
  BASELINE: 7,
  MARGIN: 13,
  GUTTER: 11,
  COLUMN: 19,
};

const text = {
  title: {
    SIZE: 39,
    LINE_HEIGHT: 56,
  },
  h1: {
    SIZE: 31,
    LINE_HEIGHT: 49,
  },
  h2: {
    SIZE: 24,
    LINE_HEIGHT: 35,
  },
  h3: {
    SIZE: 19,
    LINE_HEIGHT: 28,
  },
  body: {
    SIZE: 15,
    LINE_HEIGHT: 21,
  },
  body2: {
    SIZE: 14,
    LINE_HEIGHT: 21,
  },
  button: {
    SIZE: 15,
    LINE_HEIGHT: 21,
  },
  overline: {
    SIZE: 12,
    LINE_HEIGHT: 21,
  },
};

// https://www.designsystems.com/grids-spacing-and-layout-guides/
// https://grtcalculator.com/
// https://material.io/design/typography/the-type-system.html#type-scale

// 39 / 56 - title
// 31 / 49 - h1
// 24 / 35 - h2
// 19 / 28 - h3
// 15 / 21 - body
// 12 / 21 - body2 / small

// button (caps?) - caps, letter spacing 1.25
// overline (text above a heading) - caps, letter spacing 1.5
//

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
    SECONDARY: '#9a958f',
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
