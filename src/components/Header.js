import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';


export const Header = () => {

    const user = useSelector((store) => store.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignout = () => {
        signOut(auth).then(() => {
            console.log("User signed out successfully");

        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(addUser({ uid: user.uid, email: user.email, displayName: user.displayName, photoURL: user.photoURL }));
                navigate('/browse');
                console.log("User is signed in:", user);

            } else {
                dispatch(removeUser());
                navigate('/');
                console.log("User Signed out");
            }
        });

        return () => {

            unsubscribe();

        }
    }, []);
    return (

        <div className='absolute w-screen px-8 py-2 flex bg-gradient-to-b from-black z-10 justify-between'>

            <img alt='logo' className='w-44'
                src={LOGO} />

            {user && <div className='flex p-2'>
                <img alt='user-icon' className='w-12 h-12 m-2' src={user.photoURL} />
                <button className='text-white font-bold' onClick={handleSignout}>(Sign Out)</button>
            </div>}
        </div>

    )
}
