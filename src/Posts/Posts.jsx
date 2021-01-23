import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";

import './posts.css';

function Posts(props) {
    const dispatch = props.dispatch;
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <>
            <p>"id" : {props.state.posts.post && props.state.posts.post.id}</p>
        </>
    )
}

const getPosts = () => {
    return dispatch => {
        dispatch({type: 'initiated'})
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