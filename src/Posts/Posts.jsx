import React from "react";
import { connect } from "react-redux";

function Posts(props) {
    return (
        <>
            Posts
        </>
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