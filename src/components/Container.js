import styled from 'styled-components'
import {above} from '../utils/responsive'
import {containerWidth} from '../constants'

const Container = styled.div`
	margin-left: auto;
	margin-right: auto;
	display: block;
	width: 100%;
	max-width: ${containerWidth};
	padding: 0 1rem;
	${above.md`
		padding: 0;
		width: 95%;
	`}
	${above.xg`width: 100%;`}
	${p => p.relative && `position: relative;`}
`

export default Container
