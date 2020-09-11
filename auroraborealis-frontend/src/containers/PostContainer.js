import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { fetchPosts } from '../actions/posts'; 
import Posts from '../components/posts/Posts'; 


class PostContainer extends Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        const posts = this.props.postReducer
        return(
            <div className="PostsContainer">
                <Posts posts={this.props.posts} /> 
            </div> 
        )
    }

}

const mapStateToProps = (state) => {
    return {
        posts: state.postReducer, 
    }
}

// const mapStateToProps = ( posts ) => ({ posts })

// const mapDispatchToProps = dispatch => ({
//     addPost: post => dispatch({ type: "ADD_POST", post }), 
//     deletePost: (id) => dispatch({ type: "DELETE_POST", id})
// })

export default connect(mapStateToProps, { fetchPosts })(PostContainer)
