import { useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import toast from 'react-hot-toast';




const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(false);
    const [cardItem, setCardItem] = useState([]);
    const [wish, setWish] = useState([]);

    const ProductCount = cardItem.length;

    // Add to card function
    const handleAddCard = (product) => {
        setCardItem(prevItem => {
            const Existsitem = prevItem.find(item => item.id === product.id)
            if (Existsitem) {
                toast.error("Your Cart Already Added!", {
                    style: { background: '#FF4D4D', color: '#fff' },
                    icon: '⚠️'
                });
                return prevItem;
            }
            toast.success("Your Cart is Added", {
                style: { background: '#5CAF90', color: '#fff' },
                icon: '✅'
            });
            return [...prevItem, { ...product, quantity: 1 }]
        })
    };

    // add wishList
    const handleWish = (product) => {
        setWish(prevItems => {
            const exists = prevItems.find(item => item.id === product.id);

            if (exists) {
                toast.error("Already in wishlist!", {
                    style: { background: '#FF4D4D', color: '#fff' },
                    icon: '⚠️'
                });
                return prevItems;
            }

            toast.success("Added to wishlist!", {
                style: { background: '#5CAF90', color: '#fff' },
                icon: '✅'
            });

            return [...prevItems, { ...product, count: 1 }];
        });
    };



    // const handleIncrease = (productId) => {
    //     setCardItem(prevItem =>
    //         prevItem.map(item => item.id === productId ? {
    //             ...item, quantity: item.quantity + 1
    //         } : item)
    //     )
    // }

    // const handleDecrease = (productId) => {
    //     setCardItem(prevItem =>
    //         prevItem.map(item => item.id === productId ? {
    //             ...item, quantity: item.quantity - 1
    //         } : item)
    //     )
    // }


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
        handleWish,
        wish
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