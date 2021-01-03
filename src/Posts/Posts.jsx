import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";

function Posts(props) {
    useEffect(() => {
        getPosts(props.dispatch);
    }, []);

    return (
        <>
            "id" : {props.state.posts.post && props.state.posts.post.id}
        </>
    )
}

const getPosts = dispatch => {
    dispatch({type: 'initiated'});
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(
            res => {
                dispatch({type: 'initiated'});
                dispatch({type: 'fetched', post: res.data[0]});
            }
        )
        .catch(
            err => {
                dispatch({type: 'error', message: err.message});
            }
        )
}

const mapStateToProps = state => {
    return {
        state,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
    }
}

export const PostsComponent = connect(mapStateToProps, mapDispatchToProps)(Posts);