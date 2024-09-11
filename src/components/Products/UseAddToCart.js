const [cartCount, setCartCount] = useState(0);


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