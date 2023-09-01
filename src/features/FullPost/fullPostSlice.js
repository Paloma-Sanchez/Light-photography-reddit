import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const loadPostComments = createAsyncThunk(
    'fullPost/loadPostComments',
    async (category) => {
        const response = await fetch(`https://www.reddit.com/r/${category.category}/comments/${category.postId}.json`)
        const json = await response.json();
        return json;
    }
)

const fullPostSlice = createSlice({
    name:'fullPost',
    initialState:{
                    post:[{data:{children:{data:['']}}}, {data:{children:{data:['']}}}],
                    postIsLoading:false,
                    postHasFailed:false
                },
    extraReducers: (builder) => {
        builder
        .addCase(loadPostComments.pending, (state) => {
            state.postIsLoading=true;
            state.postHasFailed=false;
        })
        .addCase(loadPostComments.fulfilled, (state, action) => {
            //console.log(action.payload[0])
            state.post = action.payload;
            state.postIsLoading=false;
            state.postHasFailed=false;
        })
        .addCase(loadPostComments.rejected, (state) => {
            state.postIsLoading=false;
            state.postHasFailed=true;
        })
    }
})

export const fullPostReducer = fullPostSlice.reducer;

export const selectPostIsLoading = (state) => {
    return state.fullPost.postIsLoading;
}
export const selectPostHasFailed = (state) => {
    return state.fullPost.postHasFailed;
}

export const selectFullPost = (state) => {
    //console.log(state.fullPost.post.data)
    return state.fullPost.post
}


