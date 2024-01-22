import React from 'react'

const A = ({posts,messge}) => {
  return (
	<div>
	  <h1>A component</h1>
	  <p>{messge}</p>
	  <ul>
		{posts.map(post=>{
			return (
				<li key={post.id}>
					<p>{post.title}</p>
				</li>
			)
		})}
	  </ul>
	</div>
  )
}

export default A
