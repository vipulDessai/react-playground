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
        <ul>
            {
                props.state && props.state.posts.posts && props.state.posts.posts.map(
                    (p, index) => (
                        <li key={index}>
                            <ul>
                                <li style={{display: 'inline'}}>id - {p.id}</li>
                                <li style={{display: 'inline'}}>&nbsp;{p.title}</li>
                            </ul>
                        </li>
                    )
                )
            }
        </ul>
    )
}

const getPosts = () => {
    return dispatch => {
        dispatch({type: 'initiated'})
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(
                res => {
                    dispatch({type: 'initiated'});
                    dispatch({type: 'fetched', posts: res.data});
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