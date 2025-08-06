import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Check, Package, Truck, Mail, Download, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get order data from navigation state
  const orderData = location.state || {
    orderNumber: 'KC1234567890',
    total: '244.97',
    items: []
  };

  useEffect(() => {
    // If no order data, redirect to home
    if (!location.state) {
      navigate('/');
    }
  }, [location.state, navigate]);

  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 7);

  const handleContinueShopping = () => {
    navigate('/shop');
  };

  const handleViewOrder = () => {
    navigate('/profile', { state: { activeTab: 'orders' } });
  };

  const handleTrackOrder = () => {
    navigate(`/order-tracking/${orderData.orderNumber}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container px-4 py-16 max-w-4xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Order Confirmed!
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Thank you for your purchase
          </p>
          <p className="text-sm text-gray-500">
            Order #{orderData.orderNumber}
          </p>
        </div>

        {/* Order Details */}
        <div className="bg-gray-50 border border-gray-200 p-6 md:p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
              <div className="space-y-3">
                {orderData.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover bg-gray-100"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                      <p className="text-xs text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
                <div className="border-t border-gray-200 pt-3 mt-4">
                  <div className="flex justify-between font-medium">
                    <span className="text-gray-900">Total</span>
                    <span className="text-gray-900">${orderData.total}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Information */}
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">Delivery Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Package className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Order Processing</h3>
                    <p className="text-xs text-gray-500">Your order is being prepared for shipment</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Estimated Delivery</h3>
                    <p className="text-xs text-gray-500">
                      {estimatedDelivery.toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Tracking Information</h3>
                    <p className="text-xs text-gray-500">We'll email you tracking details once your order ships</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Timeline */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Order Timeline</h2>
          <div className="relative">
            <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-200"></div>
            
            <div className="space-y-6">
              {/* Current Step */}
              <div className="relative flex items-start">
                <div className="relative z-10 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-900">Order Confirmed</h3>
                  <p className="text-xs text-gray-500">Just now</p>
                </div>
              </div>
              
              {/* Future Steps */}
              <div className="relative flex items-start">
                <div className="relative z-10 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <Package className="w-4 h-4 text-gray-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-600">Processing</h3>
                  <p className="text-xs text-gray-400">1-2 business days</p>
                </div>
              </div>
              
              <div className="relative flex items-start">
                <div className="relative z-10 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <Truck className="w-4 h-4 text-gray-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-600">Shipped</h3>
                  <p className="text-xs text-gray-400">5-7 business days</p>
                </div>
              </div>
              
              <div className="relative flex items-start">
                <div className="relative z-10 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-gray-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-600">Delivered</h3>
                  <p className="text-xs text-gray-400">
                    Est. {estimatedDelivery.toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="bg-blue-50 border border-blue-200 p-6 mb-8">
          <h2 className="text-lg font-medium text-blue-900 mb-4">Important Information</h2>
          <div className="space-y-3 text-sm text-blue-800">
            <div className="flex items-start gap-2">
              <Mail className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <p>A confirmation email has been sent to your email address with order details and tracking information.</p>
            </div>
            <div className="flex items-start gap-2">
              <Download className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <p>You can download your receipt and track your order in your account dashboard.</p>
            </div>
            <div className="flex items-start gap-2">
              <Package className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <p>All items are carefully packaged to ensure they arrive in perfect condition.</p>
            </div>
          </div>
        </div>

        {/* Customer Support */}
        <div className="bg-gray-50 border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Need Help?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-2">Customer Support</h3>
              <p className="text-sm text-gray-600 mb-3">
                Our team is here to help with any questions about your order.
              </p>
              <div className="space-y-1 text-sm text-gray-600">
                <p>📞 +1 (555) 123-4567</p>
                <p>✉️ support@kilncrafted.com</p>
                <p>🕒 Mon-Fri 9AM-6PM EST</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-2">Return Policy</h3>
              <p className="text-sm text-gray-600 mb-3">
                Not satisfied? You can return items within 30 days for a full refund.
              </p>
              <button className="text-sm text-gray-900 border-b border-gray-900 pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors duration-300">
                View Return Policy
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleTrackOrder}
            className="bg-gray-900 text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2"
          >
            <Package size={16} />
            Track Order
          </button>
          
          <button
            onClick={handleViewOrder}
            className="text-gray-900 border border-gray-300 px-8 py-3 text-sm font-medium hover:border-gray-400 transition-colors duration-300"
          >
            View Order Details
          </button>
          
          <button
            onClick={handleContinueShopping}
            className="text-gray-900 border border-gray-300 px-8 py-3 text-sm font-medium hover:border-gray-400 transition-colors duration-300"
          >
            Continue Shopping
          </button>
        </div>

        {/* Social Sharing / Newsletter */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Share Your Experience</h2>
          <p className="text-sm text-gray-600 mb-6">
            Love your new ceramics? Share them on social media and tag us @kilncrafted
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg max-w-md mx-auto">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Stay Updated</h3>
            <p className="text-xs text-gray-600 mb-4">
              Get notified about new collections and exclusive offers
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:border-gray-500 transition-colors"
              />
              <button className="bg-gray-900 text-white px-4 py-2 text-sm hover:bg-gray-800 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderConfirmation;
