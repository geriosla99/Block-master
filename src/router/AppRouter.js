import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LogIn from "../components/LogIn";
import Register from "../components/Register";

export const AppRouter = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/' component={LogIn}/>
                    <Route exact path='/registro' component={Register}/>
                </Switch>
            </Router>
        </div>
    )
}
