import React from 'react';
import Post from './components/Post';
import './App.css';
import CreatePostForm from './components/CreatePostForm';
import { useState } from 'react';
import Feed from './components/Feed';

function App(){

  const [postForm, setPostForm] = useState([])

  let handleNewSubmission = (data) => {
    setPostForm([...postForm, data])
  }

  return(

  <div>

  <h1>Fakebook!</h1>


 <CreatePostForm onNewSubmit ={handleNewSubmission} />

  <Feed post={postForm}/>

  </div>

)

}

export default App
