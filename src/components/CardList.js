import React, {Fragment} from 'react'
import styled from 'styled-components'
import {Link as UnstyledLink} from 'gatsby'
import {colors, categories} from '../constants'
import {above, screen, print} from '../utils/responsive'
import {Heading} from './Text'
import UnstyledGrid from './Grid'
import Card from './Card'

const Grid = styled(UnstyledGrid)`
	${screen`
		padding-bottom: 8rem;
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
	display: none;
	opacity: 0.44;
	&:hover{
		opacity: 1;
		color: indianred;
	}
	${above.sm`
		display: inherit;
	`}
	${print`
		display: none;
	`}
`

const UnstyledAnchor = ({active, hash, children, ...props}) => active
	? <a {...props} active>{children}</a>
	: <Link to={`#${hash}`} {...props}>{children}</Link>

const Anchor = styled(UnstyledAnchor)`
	color: currentColor;
	text-decoration: none;
	font-weight: ${p => p.active ? 800 : 100};
`

const CardList = ({title, entries, id}) => (
	<Fragment>
		<Separator id={id}>
			{Object.keys(categories).map(key => (
				<Anchor active={key === id} hash={key}>{categories[key].title}</Anchor>
			))}
		</Separator>
		<Grid>
			{entries.map(entry => (
				<Grid.Cell key={entry.id} xs={12} md={6} lg={4}>
					<Card {...entry}/>
				</Grid.Cell>
			))}
		</Grid>
	</Fragment>
)

export default CardList
