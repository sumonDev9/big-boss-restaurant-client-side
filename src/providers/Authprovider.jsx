import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase_init";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const Authprovider = ({children}) => {

    // user
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // logout 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

         // updateprofile
         const UserProfile = (name, photo) => {
            return updateProfile(auth.currentUser, {
                displayName: name, photoURL: photo
            })
        }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser);
           // console.log('current user', currentUser);
            if(currentUser){
                //GET token and store client
                const userInfo = {email: currentUser.email};
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                        setLoading(false)
                    }
                })
            }
            else{
                localStorage.removeItem('access-token');
                setLoading(false)
            }
            
        });
        return () => {
            return unsubscribe();
        }
    }, [axiosPublic])
    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut,
        UserProfile,
        googleSignIn
    }

    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;