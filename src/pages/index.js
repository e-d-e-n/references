import '../utils/reset.css'
import React from 'react'
import {graphql} from 'gatsby'

const IndexPage = ({data}) => <pre>{JSON.stringify(data, null, 2)}</pre>

export default IndexPage

export const pageQuery = graphql`
	query {
		allAirtableExamples {
			totalCount
			edges {
				node {
					id
					name
					image {
						url
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
