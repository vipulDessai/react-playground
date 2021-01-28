import React from 'react';
import PropTypes from 'prop-types';

export function FunctionalComponent(props) {
    return (
        <div>
            {props.foo}
        </div>
    )
}

FunctionalComponent.propTypes = {
    foo: PropTypes.string.isRequired,
}