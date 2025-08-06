import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, User, Package, Heart, Settings, MapPin, Phone, Mail, Edit3 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);

  // Handle activeTab from navigation state
  useEffect(() => {
    if (location.state?.activeTab) {
      setActiveTab(location.state.activeTab);
    }
  }, [location.state]);

  // Sample user data
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Pottery Lane, Craft District, NY 10001"
  });

  // Sample order history
  const orderHistory = [
    {
      id: "ORD-2024-001",
      date: "2024-08-01",
      status: "Delivered",
      total: 189.97,
      items: [
        { name: "Ceramic Bowl Set", quantity: 2, price: 89.99 },
        { name: "Handcrafted Mug", quantity: 1, price: 34.99 }
      ]
    },
    {
      id: "ORD-2024-002",
      date: "2024-07-15",
      status: "Processing",
      total: 124.99,
      items: [
        { name: "Artisan Dinner Plates", quantity: 1, price: 124.99 }
      ]
    }
  ];

  // Sample wishlist
  const wishlist = [
    {
      id: 5,
      name: "Elegant Tea Set",
      price: 199.99,
      image: "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/ChatGPT%20Image%20Aug%205%2C%202025%2C%2010_52_00%20PM.png"
    },
    {
      id: 6,
      name: "Modern Ceramic Plates",
      price: 98.99,
      image: "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/images%20(1).jpg"
    }
  ];

  const handleBack = () => {
    navigate('/');
  };

  const handleProductClick = (id: number) => {
    navigate(`/product/${id}`);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    // In a real app, you would save to backend here
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'text-green-600 bg-green-50';
      case 'processing':
        return 'text-blue-600 bg-blue-50';
      case 'shipped':
        return 'text-purple-600 bg-purple-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container px-4 py-8 max-w-6xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={handleBack}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={16} />
          Back to Home
        </button>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm transition-colors ${
                  activeTab === 'profile' 
                    ? 'bg-gray-100 text-gray-900' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <User size={16} />
                Profile Information
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm transition-colors ${
                  activeTab === 'orders' 
                    ? 'bg-gray-100 text-gray-900' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Package size={16} />
                Order History
              </button>
              <button
                onClick={() => setActiveTab('wishlist')}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm transition-colors ${
                  activeTab === 'wishlist' 
                    ? 'bg-gray-100 text-gray-900' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Heart size={16} />
                Wishlist
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm transition-colors ${
                  activeTab === 'settings' 
                    ? 'bg-gray-100 text-gray-900' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Settings size={16} />
                Account Settings
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Profile Information */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl md:text-3xl font-light text-gray-900">
                    Profile Information
                  </h1>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Edit3 size={16} />
                    {isEditing ? 'Cancel' : 'Edit'}
                  </button>
                </div>

                <div className="border border-gray-200 p-6 space-y-6">
                  {isEditing ? (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          value={userInfo.name}
                          onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input
                          type="email"
                          value={userInfo.email}
                          onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          value={userInfo.phone}
                          onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                        <textarea
                          value={userInfo.address}
                          onChange={(e) => setUserInfo({...userInfo, address: e.target.value})}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500 transition-colors"
                        />
                      </div>
                      <button
                        onClick={handleSaveProfile}
                        className="bg-gray-900 text-white px-6 py-2 text-sm hover:bg-gray-800 transition-colors"
                      >
                        Save Changes
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <User className="text-gray-400" size={16} />
                        <div>
                          <p className="text-sm text-gray-600">Full Name</p>
                          <p className="text-gray-900">{userInfo.name}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="text-gray-400" size={16} />
                        <div>
                          <p className="text-sm text-gray-600">Email Address</p>
                          <p className="text-gray-900">{userInfo.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="text-gray-400" size={16} />
                        <div>
                          <p className="text-sm text-gray-600">Phone Number</p>
                          <p className="text-gray-900">{userInfo.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="text-gray-400 mt-0.5" size={16} />
                        <div>
                          <p className="text-sm text-gray-600">Address</p>
                          <p className="text-gray-900">{userInfo.address}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Order History */}
            {activeTab === 'orders' && (
              <div className="space-y-6">
                <h1 className="text-2xl md:text-3xl font-light text-gray-900">
                  Order History
                </h1>

                <div className="space-y-4">
                  {orderHistory.map((order) => (
                    <div key={order.id} className="border border-gray-200 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-medium text-gray-900">Order {order.id}</h3>
                          <p className="text-sm text-gray-600">Placed on {new Date(order.date).toLocaleDateString()}</p>
                        </div>
                        <div className="text-right">
                          <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                          <p className="text-sm text-gray-900 mt-1">${order.total.toFixed(2)}</p>
                        </div>
                      </div>
                      <div className="space-y-2 mb-4">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span className="text-gray-600">{item.name} × {item.quantity}</span>
                            <span className="text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <button
                          onClick={() => navigate(`/order-tracking/${order.id}`)}
                          className="flex-1 text-sm bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors duration-300"
                        >
                          Track Order
                        </button>
                        <button
                          onClick={() => navigate('/shop')}
                          className="flex-1 text-sm text-gray-900 border border-gray-300 px-4 py-2 rounded hover:border-gray-400 transition-colors duration-300"
                        >
                          Buy Again
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Wishlist */}
            {activeTab === 'wishlist' && (
              <div className="space-y-6">
                <h1 className="text-2xl md:text-3xl font-light text-gray-900">
                  Wishlist
                </h1>

                {wishlist.length === 0 ? (
                  <div className="text-center py-16">
                    <Heart className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                    <h2 className="text-xl font-light text-gray-900 mb-2">Your wishlist is empty</h2>
                    <p className="text-gray-600 mb-6">Save items you love for later</p>
                    <button 
                      onClick={handleBack}
                      className="bg-gray-900 text-white px-8 py-3 text-sm hover:bg-gray-800 transition-colors duration-300"
                    >
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-6">
                    {wishlist.map((item) => (
                      <div key={item.id} className="group cursor-pointer" onClick={() => handleProductClick(item.id)}>
                        <div className="aspect-square bg-gray-100 mb-4 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                          />
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-sm font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-600">${item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Account Settings */}
            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h1 className="text-2xl md:text-3xl font-light text-gray-900">
                  Account Settings
                </h1>

                <div className="space-y-4">
                  <div className="border border-gray-200 p-6">
                    <h3 className="font-medium text-gray-900 mb-4">Password & Security</h3>
                    <div className="space-y-3">
                      <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                        Change Password
                      </button>
                      <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors block">
                        Enable Two-Factor Authentication
                      </button>
                    </div>
                  </div>

                  <div className="border border-gray-200 p-6">
                    <h3 className="font-medium text-gray-900 mb-4">Notifications</h3>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-sm text-gray-600">Email notifications for orders</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-sm text-gray-600">Marketing emails</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm text-gray-600">SMS notifications</span>
                      </label>
                    </div>
                  </div>

                  <div className="border border-gray-200 p-6">
                    <h3 className="font-medium text-gray-900 mb-4">Account Actions</h3>
                    <div className="space-y-3">
                      <button className="text-sm text-red-600 hover:text-red-700 transition-colors">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
