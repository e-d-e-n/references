import '../utils/reset.css'
import React, {Fragment} from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import {graphql} from 'gatsby'
import {mapProps} from 'recompose'
import FitText from '@kennethormandy/react-fittext'
import {colors} from '../constants'
import {screen, print} from '../utils/responsive'
import Container from '../components/Container'
import CardList from '../components/CardList'
import Footer from '../components/Footer'
import {categories} from '../constants'

const Title = styled.h1`
	${screen`
		display: block;
		margin: 0 calc(50% - 50vw) 0;
		transform: translateY(-25%);
		line-height: 0.25;
		color: ${colors.base06};
		font-weight: 300;
		text-align: center;
		word-break: break-all;
		user-select: none;
		> * {
			margin-bottom: 0.5em;
		}
	`}
	${print`
		> * {
			transform: translate(2rem, 2rem);
			font-weight: 500;
			font-size: 8rem !important;
			line-height: 1;
			page-break-after: always;
			text-shadow:
				-2rem 2rem rgba(0,0,0,0.08),
				4rem 4rem rgba(0,0,0,0.11),
				-8rem 8rem rgba(0,0,0,0.22);
		}
	`}
`

const IndexPage = ({examples}) => (
	<Fragment>
		<Helmet><title>TCC | Arte Generativa</title></Helmet>
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
			<Footer/>
		</Container>
	</Fragment>
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
