import React, { useContext } from 'react';
import AppContext from '../AppContext';
import Header from 'component/Header/Header';
import Banner from 'component/Banner/Banner';
import { renderRoutes } from 'react-router-config';
function Guests() {
    const routes = useContext(AppContext);
    console.log('rotes new',routes);
    return (
        <>
          <Header/>
          <Banner/>  
          {renderRoutes(routes)}

        </>
    );
}


export default Guests;