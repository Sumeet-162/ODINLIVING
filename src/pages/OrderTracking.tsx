import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Package, Truck, Check, MapPin, Calendar, Info, Mail, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Sample tracking data
const sampleTrackingData = {
  orderNumber: "KC1234567890",
  status: "shipped",
  estimatedDelivery: "2025-08-13",
  trackingNumber: "1Z999AA1234567890",
  carrier: "UPS",
  items: [
    {
      id: 1,
      name: "Ceramic Bowl Set",
      price: 89.99,
      quantity: 2,
      image: "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/il_570xN.4116517537_74rd.jpg"
    }
  ],
  shippingAddress: {
    name: "John Doe",
    address: "123 Pottery Lane",
    city: "Craft District",
    state: "NY",
    zip: "10001"
  },
  timeline: [
    {
      status: "confirmed",
      title: "Order Confirmed",
      description: "Your order has been received and confirmed",
      date: "2025-08-06T10:00:00Z",
      completed: true
    },
    {
      status: "processing",
      title: "Processing",
      description: "Your order is being prepared for shipment",
      date: "2025-08-07T14:30:00Z",
      completed: true
    },
    {
      status: "shipped",
      title: "Shipped",
      description: "Your order has been shipped and is on its way",
      date: "2025-08-08T09:15:00Z",
      completed: true,
      details: "Package picked up by UPS"
    },
    {
      status: "out_for_delivery",
      title: "Out for Delivery",
      description: "Your package is out for delivery",
      date: null,
      completed: false
    },
    {
      status: "delivered",
      title: "Delivered",
      description: "Your order has been delivered",
      date: null,
      completed: false
    }
  ]
};

const OrderTracking = () => {
  const navigate = useNavigate();
  const { orderNumber } = useParams();
  const [trackingData] = useState(sampleTrackingData);

  const getStatusColor = (status: string, completed: boolean) => {
    if (completed) return "text-green-600 bg-green-100";
    if (status === trackingData.status) return "text-blue-600 bg-blue-100";
    return "text-gray-400 bg-gray-100";
  };

  const getStatusIcon = (status: string, completed: boolean) => {
    if (completed) return <Check className="w-4 h-4" />;
    
    switch (status) {
      case "confirmed":
        return <Check className="w-4 h-4" />;
      case "processing":
        return <Package className="w-4 h-4" />;
      case "shipped":
      case "out_for_delivery":
        return <Truck className="w-4 h-4" />;
      case "delivered":
        return <Check className="w-4 h-4" />;
      default:
        return <Package className="w-4 h-4" />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container px-4 py-8 max-w-4xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/profile', { state: { activeTab: 'orders' } })}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={16} />
          Back to Orders
        </button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-light text-gray-900 mb-2">
            Order Tracking
          </h1>
          <p className="text-gray-600">
            Order #{trackingData.orderNumber}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Tracking Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Status */}
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-medium text-blue-900">
                    {trackingData.timeline.find(t => t.status === trackingData.status)?.title}
                  </h2>
                  <p className="text-sm text-blue-700">
                    {trackingData.timeline.find(t => t.status === trackingData.status)?.description}
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-blue-800">
                  <Calendar className="w-4 h-4" />
                  <span>Estimated delivery: {new Date(trackingData.estimatedDelivery).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2 text-blue-800">
                  <Package className="w-4 h-4" />
                  <span>Tracking: {trackingData.trackingNumber}</span>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-6">Order Timeline</h2>
              <div className="relative">
                <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-gray-200"></div>
                
                <div className="space-y-8">
                  {trackingData.timeline.map((event, index) => (
                    <div key={event.status} className="relative flex items-start">
                      <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center ${getStatusColor(event.status, event.completed)}`}>
                        {getStatusIcon(event.status, event.completed)}
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <h3 className={`text-sm font-medium ${event.completed ? 'text-gray-900' : 'text-gray-600'}`}>
                              {event.title}
                            </h3>
                            <p className="text-xs text-gray-500 mt-1">{event.description}</p>
                            {event.details && (
                              <p className="text-xs text-blue-600 mt-1">{event.details}</p>
                            )}
                          </div>
                          <div className="text-xs text-gray-500 mt-1 md:mt-0">
                            {event.date && formatDate(event.date)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Shipping Information */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Shipping Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Delivery Address</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>{trackingData.shippingAddress.name}</p>
                    <p>{trackingData.shippingAddress.address}</p>
                    <p>{trackingData.shippingAddress.city}, {trackingData.shippingAddress.state} {trackingData.shippingAddress.zip}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Carrier Information</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Carrier: {trackingData.carrier}</p>
                    <p>Tracking Number: {trackingData.trackingNumber}</p>
                    <button className="text-blue-600 hover:text-blue-800 transition-colors">
                      Track on {trackingData.carrier} website
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Section */}
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-medium text-yellow-900 mb-2">Need Help?</h3>
                  <p className="text-sm text-yellow-800 mb-3">
                    If you have any questions about your order or delivery, our customer support team is here to help.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex items-center gap-2 text-sm text-yellow-900 bg-yellow-100 px-4 py-2 rounded hover:bg-yellow-200 transition-colors">
                      <Phone className="w-4 h-4" />
                      Call Support
                    </button>
                    <button className="flex items-center gap-2 text-sm text-yellow-900 bg-yellow-100 px-4 py-2 rounded hover:bg-yellow-200 transition-colors">
                      <Mail className="w-4 h-4" />
                      Email Support
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Order Items</h3>
              
              <div className="space-y-4">
                {trackingData.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover bg-gray-100 rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 truncate">{item.name}</h4>
                      <p className="text-xs text-gray-500">Quantity: {item.quantity}</p>
                      <p className="text-xs text-gray-500">${item.price.toFixed(2)} each</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <button
                  onClick={() => navigate(`/product/${trackingData.items[0].id}`)}
                  className="w-full text-sm text-gray-900 border border-gray-300 px-4 py-2 rounded hover:border-gray-400 transition-colors duration-300"
                >
                  View Product Details
                </button>
              </div>

              <div className="mt-4">
                <button
                  onClick={() => navigate('/shop')}
                  className="w-full text-sm bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors duration-300"
                >
                  Shop Similar Items
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Instructions */}
        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Delivery Instructions</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">What to expect:</h3>
              <ul className="space-y-1">
                <li>• Package will be delivered to your doorstep</li>
                <li>• Signature may be required for delivery</li>
                <li>• You'll receive an email notification upon delivery</li>
                <li>• Safe and secure packaging for ceramic items</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-2">If you're not home:</h3>
              <ul className="space-y-1">
                <li>• Carrier will attempt redelivery</li>
                <li>• Package may be left with a neighbor (if authorized)</li>
                <li>• Pickup options available at carrier facility</li>
                <li>• Contact us to arrange alternative delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderTracking;
