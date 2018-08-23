import React from 'react'
import styled from 'styled-components'
import {Link as UnstyledLink} from 'gatsby'
import {colors, categories} from '../constants'
import {above, print} from '../utils/responsive'
import {Heading} from './Text'
import Grid from './Grid'
import Card from './Card'

const Wrapper = styled.div`
	margin-bottom: 5rem;
	${print`
		page-break-after: always;
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
	margin-top: 5rem;
	justify-content: space-between;
	${print`
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

const UnstyledAnchor = ({active, hash, ...props}) => active
	? <a {...props} active/>
	: <Link to={`#${hash}`} {...props}/>

const Anchor = styled(UnstyledAnchor)`
	color: currentColor;
	text-decoration: none;
	font-weight: ${p => p.active ? 800 : 100};
`

const CardList = ({title, entries, id}) => (
	<Wrapper id={id}>
		<Separator>
			{Object.keys(categories).map(key => (
				<Anchor active={key === id} hash={key}>{categories[key].title}</Anchor>
			))}
		</Separator>
		<Grid>
			{entries.map(entry => (
				<Grid.Cell key={entry.id} xs={12} md={6} lg={4} print={6}>
					<Card {...entry}/>
				</Grid.Cell>
			))}
		</Grid>
	</Wrapper>
)

export default CardList
