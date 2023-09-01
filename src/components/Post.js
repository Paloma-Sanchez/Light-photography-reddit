import React from "react";
import { Link } from "react-router-dom";

export const Post = ({key, post, category}) => {
    const date = new Date();
    const now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(),
                date.getUTCDate(), date.getUTCHours(),
                date.getUTCMinutes(), date.getUTCSeconds());
    
    const created_utc= post.data.created;

    const postedHrsAgo= Math.floor(((now_utc/1000 -created_utc)/60)/60)

    const postId=post.data.name.slice(3)
    console.log(postId)


    return(
        <div className="post">
            <div key={key} className="ups" >
                <p>{post.data.ups}</p>
            </div>
            <Link to={`/${category}/${postId}`} className="post-right">
                <div className="img-container">
                    <img src = {post.data.url} className="img"/>
                </div>
                <h2 className="post-title">{post.data.title} </h2>
                <div className="post-footer">
                    <div className="post-author">
                        <p >Posted by {post.data.author}  -  </p>
                        <p>{postedHrsAgo<24?postedHrsAgo:postedHrsAgo/24} hours ago</p>
                    </div>
                    <div className="post-comments">
                        <i class="fa-solid fa-comment"></i>
                        <p className="comment-number">{post.data.num_comments}</p>
                    </div>
               </div>
            </Link>
        </div>
    )
}