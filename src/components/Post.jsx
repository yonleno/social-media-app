import React, { useState } from 'react';
import Comment from './Comment';

function Post(props){

    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState("");

    let handleCommentSubmit = (event) => {
        event.preventDefault();
       const newComment = {content: commentText}
       setComments([...comments, newComment])
       setCommentInput("")    
    }

    function handleLike(){
        setLikes(likes + 1);

        }

    return(
        <div>
            <h1>{props.title}</h1>
            <h3>{props.content}</h3>
            <p>Likes: {likes}</p>
            <button onClick={handleLike}>Like</button>
            <p>Comments:</p>
            {comments.map(comment => (
                <Comment content={comment.content} />
            )
            )
            }
            <form onSubmit={handleCommentSubmit}>
                <input type="text" onChange={(event) => setCommentText(event.target.value)} value={commentText} />
                <button type="submit">Post</button>
            </form>

        </div>



    )
}

export default Post