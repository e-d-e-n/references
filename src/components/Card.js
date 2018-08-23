import React from 'react'

const Card = ({
	id,
  name,
  image,
  artist,
  year,
  url,
  group,
  input,
  transform,
  output,
  description,
  thumbnails: {small = {}, large = {}, full = {}},
}) => (
	<div>
		<div>{name}</div>
	</div>
)


export default Card
