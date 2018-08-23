import {css} from 'styled-components'
import {breakpoints} from '../constants'

const media = type => (...args) => css`@media only ${type} {${css(...args)}}`

export const screen = media('screen')
export const print = media('print')
export const above = Object.keys(breakpoints).reduce((obj = {}, key) => ({
	...obj, [key]: media(`screen and (min-width: ${breakpoints[key].width})`),
}), {})
