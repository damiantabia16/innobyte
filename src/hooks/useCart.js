import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const useCart = () => {
    const context = useContext(CartContext);

    if (context === undefined) {
        throw new Error('useCart must be used withian a CartProvider');
    }

    return context;
}