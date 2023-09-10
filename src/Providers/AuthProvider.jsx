import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //   register new user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //  sign in with email & pass
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    //  google signIn
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // detected current user  
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log("current user", currentUser);
            setLoading(false);
        });
        return unsubscribe;
    }, []);


    // Updated Profile
    const upDateProfile = (currentUser, name, photo) => {
        return updateProfile(currentUser, {
            displayName: name,
            photoURL: photo,
        });
    };


    //   user LogOut
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };


    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        upDateProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;