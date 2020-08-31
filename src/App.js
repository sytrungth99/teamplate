import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import routes from 'router/common/routes';
import AppContext from './AppContext';
import MainLayout from './layouts/MainLayout';


function App() {
 
  return (
    <AppContext.Provider value={routes}>
      <Router>
        <MainLayout/>
      </Router>
    </AppContext.Provider>
  );
}


export default App;
