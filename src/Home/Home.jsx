import React from "react";
import { connect } from "react-redux";

import { Form } from "../_components";

const Home = (props) => {
    const onSubmit = ({dsmFile}) => {
        console.log(`Selected file - ${dsmFile.current.files[0].name}`);
    }
    return (
        <>
            <p>Home is where the war is!!</p>
            <Form onSubmit={onSubmit}></Form>
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