import {mix} from 'polished'

export const columns = 12
export const containerWidth = '70rem'
export const breakpoints = {
	xs: {width:  '0rem', gutter: 1.0},
	sm: {width: '30rem', gutter: 1.5},
	md: {width: '48rem', gutter: 2.0},
	lg: {width: '62rem', gutter: 2.0},
	xg: {width: '80rem', gutter: 2.0},
}

export const categories = {
	ancestors: {title: 'Ancestrais'},
	references: {title: 'Referências'},
	posterity: {title: 'Posteridade'},
}


// ----------------------------------------------------
// Colors
// ----------------------------------------------------

const black = '#141618'
const white = '#FFFFFF'
export const colors = {
	white:          white,
	black:          black,
	base88:         mix(0.88, black, white),
	base66:         mix(0.66, black, white),
	base44:         mix(0.44, black, white),
	base22:         mix(0.22, black, white),
	base11:         mix(0.11, black, white),
	base06:         mix(0.06, black, white),
	base03:         mix(0.03, black, white),
	brand:          'indianred',
}

// ----------------------------------------------------
// Font Stacks
// ----------------------------------------------------

/* eslint-disable max-len */
export const fonts = {
	InterUI: '"Inter UI","SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif,-apple-system,BlinkMacSystemFont,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
}
/* eslint-enable max-len */
