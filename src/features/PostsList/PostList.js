import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterPosts, loadAllArticles, selectAllPosts, selectAllPostsAreLoading } from "./postListSlice";
import { useParams, useSearchParams } from "react-router-dom";
import { Post } from "../../components/Post";
import { SearchBar } from "../../components/SearchBar";

export const PostList = () =>{
    const {category} = useParams();
    const dispatch = useDispatch();
    const allPosts = useSelector(selectAllPosts);
    const loadingPosts = useSelector(selectAllPostsAreLoading);
    const [searchParams, setSearchParams] = useSearchParams();
    //console.log(allPosts.children)

    useEffect (() => {
        dispatch(loadAllArticles(category));
    }, [dispatch, category])
    


    if(loadingPosts){
        return <h1>Loading...</h1>
    }

    const title = searchParams.get("title");
    const filteredPosts =  title ? filterPosts(title, allPosts.children) : allPosts.children

   const posts = filteredPosts.map((post, index) => {   
    

        return (
            <> 
          

                <Post key={index} post={post}/>
            </>
        )
    })




    
// 
    
    

    return (
        <>
          <form className="search-bar">
                <input type="text" className="search" placeholder="Search for a post"  onChange={(e)=>setSearchParams({title:e.target.value})}/>
                <button type="submit" className="search-button">
                    🔎
                </button>
            </form>
            <div className="grid">
                {posts}
            </div>
        </>

    )
   




}