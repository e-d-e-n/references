import React from 'react'

const IndexPage = () => <div>Hello world!</div>

export default IndexPage


const pageQuery = graphql`
	{
	 allAirtable {
		edges {
			 node {
				 slug
			 }
			}
	 }
	}
`
