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
                    <Route exact path='/' component={LogIn}/>
                    <Route exact path='/registro' component={Register}/>
                    <Route exact path='/home' component={Movies}/>
                </Switch>
            </Router>
        </div>
    )
}
