import { useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, ProviderId, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import Swal from 'sweetalert2';




const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(false);
    const [cardItem, setCardItem] = useState([]);

    const ProductCount = cardItem.length;

    // Add to card function
    const handleAddCard = (product) => {
        setCardItem(prevItem => {
            const Existsitem = prevItem.find(item => item.id === product.id)
            if (Existsitem) {
                Swal.fire("You Card Already Added!");
                return prevItem;
            }
            return [...prevItem, { ...product, quantity: 1 }]
        })
    };

    const handleIncrease =(productId)=>{
        setCardItem(prevItem =>
            prevItem.map(item => item.id === productId ?{
                ...item, quantity: item.quantity + 1
            } : item)
        )
    }

    const handleDecrease  =(productId)=>{
        setCardItem(prevItem =>
            prevItem.map(item => item.id === productId ? {
                ...item, quantity: item.quantity -1
            } : item)
        )
    }


    // signIn user
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    // signUp user 
    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // SignOut
    const LogOut = () => {
        setLoading(true)
        return signOut(auth);
    };
    const Info = {
        loading,
        setLoading,
        signIn,
        signUp,
        LogOut,
        user,
        ProductCount,
        handleAddCard,
        cardItem,
        handleIncrease,
        handleDecrease
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('currenUser', currentUser)
            setUser(currentUser)
        })
        return () => {
            unsubcribe();
        }
    }, []);
    return (
        <AuthContext.Provider value={Info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;