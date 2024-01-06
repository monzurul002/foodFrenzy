import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import app from "../firebase/firebase.config";
export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // google auth Provider
    const provider = new GoogleAuthProvider()
    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }

    //crate an account;
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //sign in with email & password
    const signInWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //update profile

    const updateUserProfile = (name, photoURL) => {

        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }

    const logOut = () => {
        return signOut(auth)

    }
    //get current user
    useEffect(() => {
        const unsubScribe = onAuthStateChanged(auth, (currUser) => {
            if (currUser) {
                setUser(currUser);
                setLoading(false)
            } else {

            }
        })
        return () => [
            unsubScribe()
        ]

    }, [])


    const authInfo = {
        user,
        loading,
        createNewUser,
        signInWithEmailPassword,
        googleSignIn,
        logOut,
        updateProfile,
        updateUserProfile
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;