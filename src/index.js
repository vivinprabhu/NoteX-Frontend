import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from "react-redux";
import { store } from './Component/Redux/Store';

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Landing from './Component/Landing';
import Login from './Component/Login';
import Register from './Component/Register';
import NoteX from './Component/NoteX';

export default function RouteApp() {
    // const loggedIn = localStorage.getItem('loggedIn'); //comment this while local running
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<Landing />}></Route>
                    <Route path="/login" element={localStorage.getItem('loggedIn') === 'true' ? <Navigate to="/noteX" /> : <Login />}></Route>
                    <Route path="/register" element={localStorage.getItem('loggedIn') === 'true' ? <Navigate to="/noteX" /> : <Register />}></Route>
                                       
                    <Route path="/noteX" element={<NoteX />}></Route>

                </Routes>
            </Router>
        </Provider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouteApp />);