import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updatePassword, updateProfile } from "firebase/auth";

import { createContext, useEffect, useState } from 'react';
import app from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [currentUser, setCurrentUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [isAnimationVisible, setIsAnimationVisible] = useState(true);

    // auth initialize
    const auth = getAuth(app);

    // sign up user
    const signUpUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // email sign in
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // update profile
    const profileUpdate = (currentUser, name, photoLink) => {
        setLoading(true);
        return updateProfile(currentUser, {
            displayName: name,
            photoURL: photoLink,
            role: 'student',
        });
    };

    // change password
    const changePassword = (newPassword) => {
        setLoading(true)
        const user = auth.currentUser;
        return updatePassword(user, newPassword);
    }

    // reset password
    const resetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    };

    // log out
    const logOut = () => {
        return signOut(auth);
    };

    const authInfo = {
        loading,
        user,
        setLoading,
        currentUser,
        signUpUser,
        signIn,
        profileUpdate,
        resetPassword,
        logOut,
        changePassword,
        isAnimationVisible,
        setIsAnimationVisible
    }

    useEffect(() => {
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
            setUser(authUser)
            const api = axios.create({
                // baseURL: 'https://any-vessel.vercel.app',
                baseURL: 'https://anyvessel-server.onrender.com',
                // baseURL: 'http://localhost:5000',
            });

            if (authUser?.email) {
                await api.get(`/users/${authUser.email}`)
                    .then((res) => {
                        if (res.data.email) {
                            setLoading(false);
                            setCurrentUser(res.data);
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                        setLoading(false);
                    });
            } else {
                setLoading(false)
            }
        });

        return () => {
            return unsubscribe();
        }
    }, [auth]);

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;