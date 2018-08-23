import React from 'react'
import styled from 'styled-components'
import {colors} from '../constants'
import {screen, print} from '../utils/responsive'
import {Heading, Paragraph} from './Text'
import Pills from './Pills'

const Wrapper = styled.a`
	display: block;
	margin: 4rem 0;
	text-decoration: none;
	page-break-inside: avoid;
	color: currentColor;
	:hover {
		color: ${colors.brand};
	}
	${print`
		&:after{
			display: table;
			content: ' ';
			clear: both;
		}
	`}
`

const ImageWrapper = styled.div`
	overflow: hidden;
	display: block;
	${screen`
		margin: 0.5rem 0;
		height: 16em;
		display: flex;
		align-items: center;
		background: ${colors.black};
		${Wrapper}:hover & {
			background: ${colors.brand};
		}
	`}
	${print`
		float: left;
		width: 41.666%;
		padding-right: 2rem;
	`}
`

const Image = styled.img`
	width: 100%;
	object-position: center;
	object-fit: cover;
	display: block;
	${Wrapper}:hover & {
		opacity: 0.22;
		filter: grayscale(1);
		mix-blend-mode: overlay;
	}
`

const TextWrapper = styled.div`
	${print`
		overflow: hidden;
		float: left;
		width: 58.333%;
	`}
`

const Description = styled(Paragraph)`
	${screen`
		overflow: hidden;
		max-height: 3.5em;
		${Wrapper} & {
			height: auto;
		}
	`}
`

const Card = ({
	id,
	name,
	image,
	artist,
	year,
	url,
	group,
	input = [],
	transform = [],
	output = [],
	description,
	thumbnails: {small = {}, large = {}, full = {}},
}) => (
	<Wrapper href={url && url} target='_blank'>
		<ImageWrapper><Image src={image}/></ImageWrapper>
		<TextWrapper>
			{name && <Heading size={3}>{name}</Heading>}
			<Pills icon='log-in' entries={input}/>
			<Pills icon='zap' entries={transform}/>
			<Pills icon='log-out' entries={output}/>
			{(description || null) && <Description size={1}>{description}</Description>}
		</TextWrapper>
	</Wrapper>
)


export default Card
