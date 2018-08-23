import '../utils/reset.css'
import React from 'react'
import styled from 'styled-components'
import {graphql} from 'gatsby'
import {mapProps} from 'recompose'
import Container from '../components/Container'
import Card from '../components/Card'

const Wrapper = styled.div`
	display: block;
`

const IndexPage = ({examples}) => (
	// <div>{JSON.stringify(examples, null, 2)}</div>
	<Wrapper>
		<Container>
			{examples.map(example => <Card {...example}/>)}
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
