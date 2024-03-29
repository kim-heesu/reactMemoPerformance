import React, { useCallback } from 'react'

const Message = React.memo(({messge})=>{
	return(
		<p>{messge}</p>
	)
})

const ListItem = React.memo(({post}) =>{
	return(
		<li key={post.id}>
			<p>{post.title}</p>
		</li>
	)
})

const List = React.memo(({posts,testFunction}) =>{
	return (
		<ul>
			{posts.map(post=>{
				return (
					<ListItem key={post.id} post={post} />
				)
			})}	
		</ul>
	)
})

const B = ({posts,messge}) => {
	console.log('dd')
	const testFunction = useCallback(() =>{},[]);
  return (
	<div>
	  <h1>B component</h1>
		<Message messge={messge} />
		<List posts={posts} testFunction={testFunction}/>
	</div>
  )
}

export default B
