import React from 'react'
import styled from 'styled-components'
import {Link as UnstyledLink} from 'gatsby'
import {colors, categories} from '../constants'
import {above, print} from '../utils/responsive'
import {Heading} from './Text'
import UnstyledGrid from './Grid'
import Card from './Card'

const Grid = styled(UnstyledGrid)`
	${above.xs`
		padding-bottom: 4rem;
	`}
	${above.sm`
		padding-bottom: 8rem;
	`}
	${above.md`
		padding-bottom: 10rem;
	`}
	${above.lg`
		padding-bottom: 12rem;
	`}
`

const Separator = styled(Heading)`
	display: block;
	position: sticky;
	top: 0;
	font-weight: 300;
	background: white;
	padding: 0.5em 0;
	border-bottom: 1px solid ${colors.base88};
	z-index: 1;
	display: flex;
	justify-content: space-between;
	box-shadow: 0 -1px 0 white;
	${print`
		margin-top: 0rem;
		page-break-before: always;
		position: relative;
	`}
`

const Link = styled(UnstyledLink)`
	color: currentColor;
	text-decoration: none;
	font-weight: 800;
	display: block;
	${p => !p.active && `
		font-weight: 100;
		display: none;
		opacity: 0.44;
		&:hover{
			opacity: 1;
			color: indianred;
		}
	`}
	${above.sm`
		display: inherit;
	`}
`

const CardList = ({title, entries, id}) => (
	<div id={id}>
		<Separator>
			{Object.keys(categories).map(key => (
				<Link active={key === id} to={`#${key}`}>{categories[key].title}</Link>
			))}
		</Separator>
		<Grid>
			{entries.map(entry => (
				<Grid.Cell key={entry.id} xs={12} md={6} lg={4}>
					<Card {...entry}/>
				</Grid.Cell>
			))}
		</Grid>
	</div>
)

export default CardList
