import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const getUsers = () => {
    const users = [
        {
            "id": 0,
            "name": "Ervin Howell",
        },
        {
            "id": 1,
            "name": "Clementine Bauch",
        },
        {
            "id": 2,
            "name": "Patricia Lebsack",
        },
    ];

    return users;
}

export function FunctionalComponent(props) {
    const [users, setUsers] = useState([]);

    useEffect(() => { 
        setUsers(props.getUsers());
    }, [props])

    return (
        <div>
            <ul>
                <li>foo: &nbsp;</li>
                <li>{props.foo}</li>
            </ul>
            <ul>
                {
                    users.map(user => <li key={user.id}>{user.name}</li>)
                }
            </ul>
        </div>
    )
}

FunctionalComponent.propTypes = {
    foo: PropTypes.string.isRequired,
}

FunctionalComponent.defaultProps = {
    getUsers
}