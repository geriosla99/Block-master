import React, { useState, useEffect } from 'react'
import { firebase } from '../firebase/firebaseConfig'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { AuthRouter } from './AuthRouter';
import { login } from '../action/action';
import Home from "../containers/Home";
<<<<<<< HEAD
import FormCrud from "../components/FormCrud/FormCrud";
=======
import FormCrud from '../components/FormCrud/FormCrud';
>>>>>>> ec8359fbac4442dd72e4d2f1dd900afac3787f01

export const AppRouter = () => {
    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLooggedIn, setIsLooggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {

            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLooggedIn(true)

            } else {
                setIsLooggedIn(false)
            }
            setChecking(false)
        })

    }, [dispatch, setChecking])

    if (checking) {
        return (
            <h1>Cargando...</h1>
        )
    }

    return (
        <div>
            <Router>
                <Switch>
                    <PublicRoute
                        path="/auth"
                        component={AuthRouter}
                        isAuthenticated={isLooggedIn}
                    />

                    <PrivateRoute
                        exact
                        path="/"
                        component={Home}
                        isAuthenticated={isLooggedIn}
                    />

<<<<<<< HEAD
                    <PrivateRoute 
                    exact path='/forms' 
                    component={FormCrud}
                    isAuthenticated={isLooggedIn}
=======
                    <PrivateRoute
                        exact
                        path="/form"
                        component={FormCrud}
                        isAuthenticated={isLooggedIn}
>>>>>>> ec8359fbac4442dd72e4d2f1dd900afac3787f01
                    />

                    <Redirect to="/auth/login" />
                </Switch>
            </Router>
        </div>
    )
}
