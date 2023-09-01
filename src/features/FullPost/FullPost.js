import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { loadPostComments, selectFullPost, selectPostIsLoading } from "./fullPostSlice";

export const FullPost = () => {
    const {category, postId}=useParams();
    const dispatch = useDispatch();
    const postIsLoading = useSelector(selectPostIsLoading);
    const postObj = useSelector(selectFullPost);
    const post = postObj[0].data.children[0];
    const comments = postObj[1].data.children;
    const navigate = useNavigate();
   

    useEffect(()=>{
        dispatch(loadPostComments({category:category, postId:postId}))
    }, [dispatch])

    console.log(comments);
    console.log(post)

    const handleSubmit =(e) => {
        e.preventDefault();
        navigate(-1);
    }

    const date = new Date();
    const now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(),
                date.getUTCDate(), date.getUTCHours(),
                date.getUTCMinutes(), date.getUTCSeconds());
    
    const created_utc= post.data.created;

    const postedHrsAgo= Math.floor(((now_utc/1000 -created_utc)/60)/60)

   if (postIsLoading){
    return <h1>Loading...</h1>
   }


   const comment = comments.map((child)=>{
        return(
            <div className="comment">
                <p> "{child.data.body}"</p>
            </div>
        )
    })

    return(
        <div>
            <button onClick={handleSubmit} className="back-button">Back</button>
            <h2 className="post-title">{post.data.title} </h2>
                <div className="post-footer">
                    <div className="post-author">
                        <p >Posted by {post.data.author}  -  </p>
                        <p>{postedHrsAgo<24?postedHrsAgo:postedHrsAgo/24} hours ago</p>
                    </div>
                </div>
            <div className="fp-img-container">
                <img src={post.data.url} className="img"/>
            </div>
            {comment}

            
        </div>
    )
}