
const useHandleCart = (cartCount, setCartCount) => {
    const handleAddToCart = () => {
        setCartCount(cartCount + 1);
    };
    const handleRemoveFromCart = () => {
        setCartCount(0); 
    };
    
    const handleDecrement = () => {
        if (cartCount > 1) {
            setCartCount(cartCount - 1); 
        }
    }
    return{handleAddToCart,handleRemoveFromCart,handleDecrement}
}

export default useHandleCart;