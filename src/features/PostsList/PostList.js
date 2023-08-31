import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllArticles, selectAllPosts, selectAllPostsAreLoading } from "./postListSlice";

export const PostList = () =>{
    const dispatch = useDispatch();
    const allPosts = useSelector(selectAllPosts);
    const loadingPosts = useSelector(selectAllPostsAreLoading);

    useEffect (() => {
        dispatch(loadAllArticles());
    }, [dispatch])
    
    console.log(allPosts);

    const posts = allPosts.children.map((post, index) => {   
        if(index===0 || index===1){
            return
        }

        return (
            <> <div>
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
            </>
        )
    })

    if(loadingPosts){
        return <h1>Loading...</h1>
    }

    
    

    return (
        <>
            {posts} 
        </>

    )
   




}