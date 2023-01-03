import { style } from '@vanilla-extract/css'

export const option = style({
  listStyle: 'none',
  marginRight: '10px',
})

export const optionLink = style({
  color: '#4a3142',
  textDecoration: 'none',
  fontSize: '13px',
  padding: '4px 8px',
  display: 'block',
  borderTopRightRadius: '3px',
  borderTopLeftRadius: '3px',
  backgroundColor: '#faf6f0',
})

export const optionLinkIsCurrent = style({
  color: '#000',
  backgroundColor: '#e8d6e3',
})

export const options = style({
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'left',
  margin: '0 !important',
})