import { style } from '@vanilla-extract/css';

export const cardStyle = style({
  padding: '16px',
  borderRadius: '16px',
  gap: '8px',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'var(--color-light-bg-secondary)',
});

export const priceStyle = style({
  color: 'var(--color-light-text-primary);',
});
