import React from 'react';
import PropTypes from 'prop-types';

export class CLassyComponent extends React.Component {
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