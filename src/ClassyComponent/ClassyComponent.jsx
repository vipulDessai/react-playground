import React from 'react';
import PropTypes from 'prop-types';

export class CLassyComponent extends React.Component {
    constructor() {
        // need to call super if we want to use this.props
        super()
    }
    render() {
        return (
            <div>
                {this.props.foo}
            </div>
        )
    }
}

CLassyComponent.propTypes = {
    foo: PropTypes.string.isRequired,
}