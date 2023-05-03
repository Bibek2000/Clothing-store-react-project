import { createContext, useState, useEffect } from "react";
import { OnAuthChangeListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";
//as the actual value you want to access
export const UserContext = createContext({
currentUser: null,
setCurrentUser: () => null,
})

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};
    useEffect(() => {
        const unsubscribe = OnAuthChangeListener((user) => {
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        })
        return unsubscribe
    }, [])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}