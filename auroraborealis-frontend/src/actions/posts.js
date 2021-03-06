export const getPosts = posts => {
    return {
        type: "GET_POSTS", 
        posts 
    }
}

export const clearPosts = () => {
    return{
        type: "CLEAR_POSTS", 
    }
}

export const addPost = post => {
    return {
        type: "ADD_POST", 
        post
    }
}

export const deletePostConnect = postId => {
    return {
        type: "DELETE_POST", 
        postId
    }
}

export const updatePostConnect = post => {
    return {
        type: "UPDATE_POST", 
        post
    }
}

export const upVotePost = post => {
    return {
        type: "UPVOTE_POST", 
        post
    }
}

export const downVotePost = post => {
    return {
        type: "DOWNVOTE_POST", 
        post
    }
}

export const fetchPosts = () => {
    return (dispatch) => {
        return fetch ("https://auroraborealis-api.herokuapp.com/posts", {
            credentials: "include", 
            method: "GET", 
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(posts => { 
            if (posts.error){
                alert(posts.error)
            } else {
                dispatch(getPosts(posts))
            }
        })
        .catch(console.log)
    }
}

export const deletePost = (postId, history) => {
    return (dispatch) => {
        return fetch(`https://auroraborealis-api.herokuapp.com/${postId}`, {
            credentials: "include", 
            method: "DELETE", 
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(response => {
                if (response.error) {
                    alert(response.error)
                } else {
                    dispatch(deletePostConnect(postId))
                    dispatch(clearPosts())
                    dispatch(fetchPosts())
                    history.push("/posts")
                }
            })
            .catch(console.log)
    }
}

export const createPost = (enteredPostData) => {
    return dispatch => {
        const postData = {
            post: {
                location: enteredPostData.location, 
                story: enteredPostData.story, 
                user_id: enteredPostData.user_id
            }
        }
        return fetch("https://auroraborealis-api.herokuapp.com/posts", {
            credentials: "include", 
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(postData)
        })
        .then(response => response.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(addPost(response))
                dispatch(clearPosts())
                dispatch(fetchPosts())
            }
        })
        .catch(console.log)
    }
}

// export const updatePost = (enteredPostData) => {
//     return dispatch => {
//         const postData = {
//             post: {
//                 location: enteredPostData.location, 
//                 story: enteredPostData.story, 
//                 user_id: enteredPostData.user_id
//             }
//         }
//         return fetch("http://localhost:3000/posts"+`${enteredPostData.id}`, {
//             credentials: "include", 
//             method: "PATCH", 
//             headers: {
//                 "Content-Type": "application/json"
//             }, 
//             body: JSON.stringify(postData)
//         })
//         .then(response => response.json())
//         .then(response => {
//             if (response.error) {
//                 alert(response.error)
//             } else {
//                 dispatch(updatePostConnect(response))
//             }
//         })
//         .catch(console.log)
//     }
// }