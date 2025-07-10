import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browse from './Browse';
import Login from './Login';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

export const Body = () => {

    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(addUser({uid: user.uid, email: user.email, displayName: user.displayName, photoURL: user.photoURL}));
                console.log("User is signed in:", user);

            } else {
                dispatch(removeUser());
                console.log("User Signed out");
            }
        });
    }, []);



    return (
        <>
            <RouterProvider router={appRouter} />

        </>
    )
}
