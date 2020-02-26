import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './views/Login';
import RegisterUser from './views/RegisterUser';
import RegisterProduct from './views/RegisterProduct'

function Routes() {

return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/registerUser" component={RegisterUser} />
            <Route exact path="/registerProduct" component={RegisterProduct} />
        </Switch>
    </ BrowserRouter>
)

}
export default Routes;