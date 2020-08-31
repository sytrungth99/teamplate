import React, { useContext } from 'react';
import AppContext from '../AppContext';
import { renderRoutes } from 'react-router-config';

function Users() {
    const routes = useContext(AppContext);
    return (
        <>
            <h1>Users</h1>
            {renderRoutes(routes)}
        </>
    );
}

export default Users;