import {useState} from 'react';

function CreatePostForm(props){

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    
    let handleSubmit = (event) => {
        event.preventDefault();
        if (title === "" || content === ""){
            alert("Please submit a title and content")
        } else {
            props.onNewSubmit({title,content})
            setTitle("")
            setContent("")
        }
    }

    let handleTitleChange = (event) => {

        setTitle(event.target.value)
    }

    let handleContentChange = (event) => {

        setContent(event.target.value)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label for="title">Title</label>
            <input type="text" name ="title" onChange={handleTitleChange} value={title}/>
            <br/>
            <label for="content">Content</label>
            <input type="text" name="content" onChange={handleContentChange} value={content}/>
            <br/>
            <br/>
            <input type="submit" disabled={title==="" || content ===""}/> 
            
            </form>
    )
}

export default CreatePostForm