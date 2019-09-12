import styled from '@emotion/styled';

export const ANIMATION_FADE_CLASSNAME = 'fade';

export const Fade = styled('div')`
  transition: opacity 0.25s;

  // enter from
  &.${ANIMATION_FADE_CLASSNAME}-enter {
    opacity: 0;
  }

  // enter to
  &.${ANIMATION_FADE_CLASSNAME}-enter-active {
    opacity: 1;
  }

  // exit from
  &.${ANIMATION_FADE_CLASSNAME}-exit {
    opacity: 1;
  }

  // exit to
  &.${ANIMATION_FADE_CLASSNAME}-exit-active {
    opacity: 0;
  }
`;
