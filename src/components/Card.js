import React from 'react'
import styled from 'styled-components'
import {colors} from '../constants'
import {Heading, Paragraph} from './Text'
import Pills from './Pills'

const ImageWrapper = styled.div`
	background: ${colors.black};
	display: flex;
	align-items: center;
	height: 16em;
	margin: 0.5rem 0;
	overflow: hidden;
`

const Image = styled.img`
	width:  100%;
	object-position: center;
	object-fit: cover;
	display: block;
	color: ${colors.brand};
`

const Description = styled(Paragraph)`
	max-height: 3.5em;
	overflow: hidden;
`

const Wrapper = styled.a`
	display: block;
	margin: 4rem 0;
	text-decoration: none;
	color: currentColor;
	:hover, :focus, :active {
		color: ${colors.brand};
		${Image} {
			opacity: 0.22;
			filter: grayscale(1);
			mix-blend-mode: overlay;
		}
		${ImageWrapper} {
			background: ${colors.brand};
		}
		${Description} {
			height: auto;
		}
	}
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
		{image && <ImageWrapper><Image src={image}/></ImageWrapper>}
		{name && <Heading size={3}>{name}</Heading>}
		<Pills icon='log-in' entries={input}/>
		<Pills icon='zap' entries={transform}/>
		<Pills icon='log-out' entries={output}/>
		{(description || null) && <Description>{description}</Description>}
	</Wrapper>
)


export default Card
