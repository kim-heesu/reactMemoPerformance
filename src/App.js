import { useEffect, useState } from 'react';
import './App.css';
import A from './components/A';
import B from './components/B';

function App() {
  const [value, setValue] = useState("");
  const [posts, setposts] = useState([]);
  useEffect(()=>{
		fetch('https://jsonplaceholder.typicode.com/posts')
		.then(response => response.json())
		.then(posts => setposts(posts));
	},[]);

  return (
    <div style={{padding:'1rem'}}>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <div style={{display:'flex'}}>
        <A messge={value} posts={posts}/>
        <B messge={value} posts={posts}/>
      </div>
    </div>
  );
}

export default App;
