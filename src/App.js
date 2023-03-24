import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import { auth } from './config/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';


function App() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            if(userAuth){
                //logged in
                dispatch(login({
                    uid: userAuth.uid,
                    email: userAuth.email
                }))
            } else {
                // logout
                dispatch(logout())
            }
        });
        return () => unsubscribe()
    },[dispatch ])
    return (
        <div className="app">
            <BrowserRouter>
                {!user ? (
                    <LoginScreen /> 
                ) : (
                    <Switch>
                        <Route exact path="/" component={HomeScreen} />
                        <Route exact path="/profile" component={ProfileScreen} />
                    </Switch>

                )}


            </BrowserRouter>
        </div>
    );
}

export default App;
