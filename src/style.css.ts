import { style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '0 16px',
  bottom: '16px',
  left: 0,
});

const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  marginTop: '32px',
  padding: '0 1rem',
});

export const appSt = {
  bottomBtn,
  container,
};
