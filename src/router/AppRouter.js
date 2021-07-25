import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LogIn from "../components/LogIn";
import Register from "../components/Register";
import Movies from "../containers/Movies";

export const AppRouter = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/' component={Movies}/>
                    <Route exact path='/login' component={LogIn}/>
                    <Route exact path='/registro' component={Register}/>
                </Switch>
            </Router>
        </div>
    )
}
