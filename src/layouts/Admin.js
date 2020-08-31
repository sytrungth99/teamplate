import React, { useContext } from 'react';
import AppContext from '../AppContext';
import { renderRoutes } from 'react-router-config';
import Header from 'component/Header/Header';

function Admin() {
    const routes = useContext(AppContext);
    return (
        <>
            <Header/>
            <h1>Admin</h1>
            {renderRoutes(routes)}
        </>
    );
}

export default Admin;