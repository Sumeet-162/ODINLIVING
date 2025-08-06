import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, Minus, Trash2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Sample cart data - in a real app, this would come from a state management solution
const initialCartItems = [
  {
    id: 1,
    name: "Ceramic Bowl Set",
    price: 89.99,
    quantity: 2,
    image: "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/il_570xN.4116517537_74rd.jpg"
  },
  {
    id: 3,
    name: "Handcrafted Mug Collection",
    price: 64.99,
    quantity: 1,
    image: "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/images.jpg"
  }
];

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const handleContinueShopping = () => {
    navigate('/');
  };

  const handleProductClick = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container px-4 py-8 max-w-6xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={handleContinueShopping}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={16} />
          Continue Shopping
        </button>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <h1 className="text-2xl md:text-3xl font-light text-gray-900 mb-8">
              Shopping Cart
            </h1>

            {cartItems.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h2 className="text-xl font-light text-gray-900 mb-2">Your cart is empty</h2>
                <p className="text-gray-600 mb-6">Add some beautiful ceramics to get started</p>
                <button 
                  onClick={handleContinueShopping}
                  className="bg-gray-900 text-white px-8 py-3 text-sm hover:bg-gray-800 transition-colors duration-300"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4 md:space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="border border-gray-200 hover:border-gray-300 transition-colors">
                    {/* Mobile Layout */}
                    <div className="block md:hidden p-4">
                      <div className="flex gap-3">
                        {/* Product Image */}
                        <div 
                          className="w-20 h-20 bg-gray-100 flex-shrink-0 cursor-pointer"
                          onClick={() => handleProductClick(item.id)}
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover hover:opacity-80 transition-opacity"
                          />
                        </div>

                        {/* Product Info and Controls */}
                        <div className="flex-1 min-w-0">
                          <button
                            onClick={() => handleProductClick(item.id)}
                            className="text-left block w-full"
                          >
                            <h3 className="font-medium text-gray-900 hover:text-gray-600 transition-colors text-sm leading-tight">
                              {item.name}
                            </h3>
                          </button>
                          <p className="text-gray-600 text-sm mt-1">${item.price.toFixed(2)}</p>
                          
                          {/* Mobile Quantity and Price Row */}
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-7 h-7 border border-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
                              >
                                <Minus size={12} />
                              </button>
                              <span className="w-8 text-center text-gray-900 text-sm">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-7 h-7 border border-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
                              >
                                <Plus size={12} />
                              </button>
                            </div>
                            
                            <div className="flex items-center gap-3">
                              <p className="font-medium text-gray-900 text-sm">
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                title="Remove item"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:flex gap-4 p-6">
                      {/* Product Image */}
                      <div 
                        className="w-24 h-24 bg-gray-100 flex-shrink-0 cursor-pointer"
                        onClick={() => handleProductClick(item.id)}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover hover:opacity-80 transition-opacity"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 space-y-2">
                        <button
                          onClick={() => handleProductClick(item.id)}
                          className="text-left"
                        >
                          <h3 className="font-medium text-gray-900 hover:text-gray-600 transition-colors">
                            {item.name}
                          </h3>
                        </button>
                        <p className="text-gray-600">${item.price.toFixed(2)}</p>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-3 mt-4">
                          <span className="text-sm text-gray-600">Quantity:</span>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 border border-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-12 text-center text-gray-900">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 border border-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Price and Remove */}
                      <div className="flex flex-col items-end justify-between">
                        <p className="font-medium text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Order Summary */}
          {cartItems.length > 0 && (
            <div className="lg:col-span-1">
              <div className="border border-gray-200 p-4 md:p-6 space-y-4 md:space-y-6">
                <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-900">
                      {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span className="text-gray-900">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between font-medium">
                      <span className="text-gray-900">Total</span>
                      <span className="text-gray-900">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {shipping > 0 && (
                  <p className="text-xs text-gray-500">
                    Free shipping on orders over $100
                  </p>
                )}

                <div className="space-y-3">
                <button 
                  onClick={() => navigate('/checkout')}
                  className="w-full bg-gray-900 text-white py-3 md:py-4 text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors duration-300"
                >
                  PROCEED TO CHECKOUT
                </button>                  <button 
                    onClick={handleContinueShopping}
                    className="w-full border border-gray-300 text-gray-900 py-3 md:py-4 text-sm font-medium tracking-wide hover:border-gray-400 transition-colors duration-300"
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
