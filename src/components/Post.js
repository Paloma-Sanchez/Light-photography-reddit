import React from "react";

export const Post = ({key, post}) => {

    return(
        <div>
        <div key={key} >
            <p>{post.data.ups}</p>
        </div>
        <div>
            <div className="img-container">
                <img src = {post.data.url} className="img"/>
            </div>
            <h2>{post.data.title} </h2>
            <p>Posted by {post.data.author}</p>
            <p>{} hours ago</p>
            <i class="icon icon-comment _3DVrpDrMM9NLT6TlsTUMxC" role="presentation"></i>

        </div>
        </div>
    )
}