import { createContext, useState } from "react";

export const DropdownContext = createContext({
    isCartOpen: false,
    setIsCartopen: () => {},
});

export const DropdownProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = {isCartOpen, setIsCartOpen}
    return(
        <DropdownContext.Provider value = {value}>{children}</DropdownContext.Provider>
    )
}