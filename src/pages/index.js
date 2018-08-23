import '../utils/reset.css'
import React from 'react'
import styled from 'styled-components'
import {graphql} from 'gatsby'
import {mapProps} from 'recompose'
import FitText from '@kennethormandy/react-fittext'
import {colors} from '../constants'
import Container from '../components/Container'
import CardList from '../components/CardList'
import {categories} from '../constants'

const Wrapper = styled.div`
	display: block;
`

const Title = styled.h1`
	margin: 0 calc(50% - 50vw);
	transform: translateY(-25%);
	line-height: 0.25;
	color: ${colors.base06};
	font-weight: 300;
	text-align: center;
	word-break: break-all;
	user-select: none;
`

const IndexPage = ({examples}) => (
	<Wrapper>
		<Title><FitText compressor={0.75}>Arte Generativa</FitText></Title>
		<Container>
			{Object.keys(categories).map(id => (
				<CardList
					key={id}
					id={id}
					title={categories[id].title}
					entries={examples.filter(x => x.group === id)}
				/>
			))}
		</Container>
	</Wrapper>
)
const getFirstImage = (images = []) => (
	images.find(({type}) => type.startsWith('image/')) || {}
)

const enhance = mapProps(({
	data: {allAirtableExamples: {edges: examples}},
}) => ({
	examples: examples
		.map(({node}) => node)
		.map(props => ({
			...props,
			group: props.group || [],
			input: props.input || [],
			transform: props.transform || [],
			output: props.output || [],
			image: getFirstImage(props.image).url,
			thumbnails: getFirstImage(props.image).thumbnails || {},
		})),
}))

export default enhance(IndexPage)

export const pageQuery = graphql`
	query {
		allAirtableExamples {
			edges {
				node {
					id
					name
					image {
						url
						type
						thumbnails {
							large { url width height }
							small { url width height }
							full { url width height }
						}
					}
					artist
					year
					url
					group
					input
					transform
					output
					description
				}
			}
		}
	}
`
