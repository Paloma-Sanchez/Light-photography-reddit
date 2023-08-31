import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const loadAllArticles = createAsyncThunk(
    'postList/loadAllArticles',

    async () => {
        const response = await fetch("https://www.reddit.com/r/wildlifephotography.json");
        const json = await response.json();
        //const body = json.data.children;
        //console.log(body);
        return json;
    }
);



const initialState={
                    posts: {data: {children:[]}},
                    allPostsAreLoading:false,
                    allPostsHaveFailed:false
};
const postListSlice = createSlice ({
    name : 'postList',
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(loadAllArticles.pending, (state) => {
                    state.allPostsAreLoading= true;
                    state.allPostsHaveFailed=false;
            })
            .addCase(loadAllArticles.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.allPostsAreLoading= false;
                state.allPostsHaveFailed=false;
            })
            .addCase(loadAllArticles.rejected, (state) => {
                state.allPostsAreLoading= false;
                state.allPostsHaveFailed=true;
            })
    }

})



export const selectAllPosts = (state) => {
    return state.postList.posts.data;
};

export const selectAllPostsAreLoading = (state) => {
    return state.postList.allPostsAreLoading;
};

export const selectAllPostsHaveFailed = (state) => {
    return state.postList.allPostsHaveFailed;
};

export const postListReducer = postListSlice.reducer;