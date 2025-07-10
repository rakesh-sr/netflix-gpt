import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const Header = () => {

    const user = useSelector((store) => store.user);
    const navigate = useNavigate();

    const handleSignout = () => {
        signOut(auth).then(() => {
            console.log("User signed out successfully");
            navigate('/');
        }).catch((error) => {
            // An error happened.
        });
    }
    return (

        <div className='absolute w-screen px-8 py-2 flex bg-gradient-to-b from-black z-10 justify-between'>

            <img alt='logo' className='w-44'
                src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' />

            {user && <div className='flex p-2'>
                <img alt='user-icon' className='w-12 h-12 m-2' src={user.photoURL} />
                <button className='text-white font-bold' onClick={handleSignout}>(Sign Out)</button>
            </div>}
        </div>

    )
}
