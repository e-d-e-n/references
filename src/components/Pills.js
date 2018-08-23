import React from 'react'
import styled from 'styled-components'
import {colors} from '../constants'
import IconComponent from './Icon'

const Icon = styled(IconComponent)`
	flex-shrink: 0;
	margin: 0.25rem;
`

const Flex = styled.div`
	display: flex;
	align-items: center;
	${p => p.wrap && `flex-wrap: wrap;`}
`

const Wrapper = styled(Flex)`
	margin: 0.25rem -0.125rem;
`

const Pill = styled.div`
	display: block;
	font-weight: 500;
	letter-spacing: 0.025rem;
	text-transform: uppercase;
	font-size: 0.625rem;
	padding: 0.125rem 0.5rem;
	margin: 0.125rem;
	border-radius: 1rem;
	background: currentColor;
	span{color: ${colors.white};}
	flex-shrink:
`

const Pills = ({icon, entries}) => (
	<Wrapper>
		<Icon icon={icon} size={18} strokeWidth={2.125}/>
		<Flex wrap>
			{entries.map(entry => (<Pill><span>{entry}</span></Pill>))}
		</Flex>
	</Wrapper>
)

export default Pills
