import React, {Fragment} from 'react'
import styled from 'styled-components'
import {colors, airtable as href} from '../constants'
import {above, print} from '../utils/responsive'

const Flex = styled.div`
	${above.xs`
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		border-top: 1px solid ${colors.base88};
		padding-top: 1rem;
		padding-bottom: 1rem;
	`}
	${above.sm`
		padding-top: 4rem;
		padding-bottom: 4rem;
	`}
	${print`
		position: fixed;
		bottom: 0;
	`}
`

const Link = styled.a`
	cursor: pointer;
	color: currentColor;
	text-decoration: none;
	font-weight: 500;
	:hover{
		color: ${colors.brand};
	}
	${print`
		display: none;
	`}
`



const Footer = () => (
	<Flex>
		<div>&copy; 2018 &mdash; Leonardo Dino + Vitor Dino.</div>
		<Link href={href} target='_blank' rel='noopener noreferrer'>airtable</Link>
	</Flex>
)

export default Footer
