import React from "react";
import { connect } from "react-redux";

const Home = (props) => {
    return (
        <>
            Home
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

export const HomeComponent = connect(mapStateToProps, mapDispatchToProps)(Home);