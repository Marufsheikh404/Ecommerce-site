import { useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState('');
    const [loading,setLoading] = useState(false);

    // signIn user
    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    };

    // signUp user 
    const signUp = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    };

    // SignOut
    const LogOut =()=>{
        setLoading(true)
        return signOut(auth);
    };
    const Info ={
        loading,
        setLoading,
        signIn,
        signUp,
        LogOut,
        user
    }

    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log('currenUser', currentUser)
            setUser(currentUser)
        })
        return ()=>{
            unsubcribe();
        }
    },[]);
    return (
        <AuthContext.Provider value={Info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;