import styled from 'styled-components'
import {breakpoints, columns} from '../constants'
import {above, print, screen} from '../utils/responsive'

const mapBreakpoints = fn => Object.keys(breakpoints)
	.map(label => above[label]`${fn(breakpoints[label])}`)

const mapPropsBreakpoints = fn => props => Object.keys(props)
	.filter(prop => Object.keys(breakpoints).includes(prop))
	.map(label => above[label]`${fn(props[label])}`)

export const Row = styled.div`
	${screen`
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		box-sizing: border-box;
		align-items: flex-start;
		${mapBreakpoints(({gutter}) => `
			margin-left: ${gutter/-2 + 'rem'};
			margin-right: ${gutter/-2 + 'rem'};
		`)}
		${p => p['space-between'] && `justify-content: space-between;`}
		${p => p['center'] && `justify-content: center;`}
		${p => p['align-center'] && `align-items: center;`}
		${p => p['align-stretch'] && `align-items: stretch;`}
	`}
`

export const Cell = styled.div`
	${screen`
		display: block;
		${mapBreakpoints(({gutter}) => `
			padding-left: ${gutter/2 + 'rem'};
			padding-right: ${gutter/2 + 'rem'};
		`)}
		${mapPropsBreakpoints(value => `
			display: ${value > 0 ? 'block' : 'none'};
			width: ${(value / columns || 1) * 100 + '%'};
		`)}
	`}
	${({print: value}) => typeof value === 'number' && print`
		float: left;
		display: ${value > 0 ? 'block' : 'none'};
		width: ${(value / columns || 1) * 100 + '%'};
	`}
`

Row.Cell = Cell
export default Row
