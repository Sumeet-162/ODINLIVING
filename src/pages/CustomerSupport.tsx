import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  HelpCircle, 
  Package, 
  CreditCard, 
  RotateCcw, 
  Truck,
  ChevronDown,
  ChevronUp,
  Send
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CustomerSupport = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('contact');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    orderNumber: '',
    message: ''
  });

  const supportTopics = [
    {
      icon: Package,
      title: "Order Status",
      description: "Track your order, shipping updates, delivery information",
      action: () => navigate('/profile', { state: { activeTab: 'orders' } })
    },
    {
      icon: CreditCard,
      title: "Payment & Billing",
      description: "Payment methods, billing issues, refunds",
      action: () => setActiveSection('contact')
    },
    {
      icon: RotateCcw,
      title: "Returns & Exchanges",
      description: "Return policy, exchange process, refund status",
      action: () => setActiveSection('returns')
    },
    {
      icon: Truck,
      title: "Shipping",
      description: "Shipping options, delivery times, international orders",
      action: () => setActiveSection('shipping')
    }
  ];

  const faqs = [
    {
      question: "How can I track my order?",
      answer: "You can track your order by visiting your profile page and clicking 'Track Order' next to your order, or by using the tracking number provided in your confirmation email."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unused items in original condition. Ceramic items must be carefully packaged to prevent damage during return shipping."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 5-7 business days. Express shipping (2-3 days) and overnight shipping options are available at checkout."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. International shipping times vary by destination, typically 7-14 business days."
    },
    {
      question: "Are your ceramics dishwasher safe?",
      answer: "Most of our ceramic pieces are dishwasher safe on the top rack. Check the product description for specific care instructions."
    },
    {
      question: "Can I cancel or modify my order?",
      answer: "Orders can be cancelled or modified within 2 hours of placement. After that, the order is processed and cannot be changed."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and digital payment methods like Apple Pay and Google Pay."
    },
    {
      question: "How do I care for my ceramic items?",
      answer: "Hand washing is recommended for longevity. Avoid extreme temperature changes and use soft cloths for cleaning. Store carefully to prevent chipping."
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form to a server
    alert('Thank you for contacting us! We\'ll respond within 24 hours.');
    setContactForm({
      name: '',
      email: '',
      subject: '',
      orderNumber: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container px-4 py-8 max-w-6xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            How can we help you?
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're here to assist you with any questions about your orders, products, or our services.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {supportTopics.map((topic, index) => (
            <div 
              key={index}
              onClick={topic.action}
              className="bg-gray-50 border border-gray-200 p-6 cursor-pointer hover:bg-gray-100 transition-colors duration-300 group"
            >
              <topic.icon className="w-8 h-8 text-gray-600 group-hover:text-gray-900 transition-colors mb-3" />
              <h3 className="font-medium text-gray-900 mb-2">{topic.title}</h3>
              <p className="text-sm text-gray-600">{topic.description}</p>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
          {[
            { key: 'contact', label: 'Contact Us' },
            { key: 'faq', label: 'FAQ' },
            { key: 'returns', label: 'Returns' },
            { key: 'shipping', label: 'Shipping Info' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveSection(tab.key)}
              className={`px-4 py-2 text-sm font-medium transition-colors duration-300 border-b-2 ${
                activeSection === tab.key
                  ? 'text-gray-900 border-gray-900'
                  : 'text-gray-600 border-transparent hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200">
                  <div className="w-10 h-10 bg-blue-100 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Phone Support</h3>
                    <p className="text-sm text-gray-600">1-800-CERAMICS (1-800-237-2642)</p>
                    <p className="text-xs text-gray-500">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200">
                  <div className="w-10 h-10 bg-green-100 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email Support</h3>
                    <p className="text-sm text-gray-600">support@kilncrafted.com</p>
                    <p className="text-xs text-gray-500">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200">
                  <div className="w-10 h-10 bg-purple-100 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Live Chat</h3>
                    <p className="text-sm text-gray-600">Available on our website</p>
                    <p className="text-xs text-gray-500">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200">
                  <div className="w-10 h-10 bg-orange-100 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Business Hours</h3>
                    <p className="text-sm text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p className="text-sm text-gray-600">Saturday: 10:00 AM - 4:00 PM EST</p>
                    <p className="text-sm text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <select
                    required
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="order-inquiry">Order Inquiry</option>
                    <option value="product-question">Product Question</option>
                    <option value="shipping-issue">Shipping Issue</option>
                    <option value="return-exchange">Return/Exchange</option>
                    <option value="payment-billing">Payment/Billing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Order Number (if applicable)</label>
                  <input
                    type="text"
                    value={contactForm.orderNumber}
                    onChange={(e) => setContactForm({...contactForm, orderNumber: e.target.value})}
                    placeholder="KC1234567890"
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    placeholder="Please describe how we can help you..."
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500 transition-colors resize-vertical"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white px-6 py-3 hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        {activeSection === 'faq' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-light text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200">
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    {expandedFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">Didn't find what you were looking for?</p>
              <button
                onClick={() => setActiveSection('contact')}
                className="bg-gray-900 text-white px-6 py-2 hover:bg-gray-800 transition-colors duration-300"
              >
                Contact Support
              </button>
            </div>
          </div>
        )}

        {/* Returns Section */}
        {activeSection === 'returns' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-light text-gray-900 mb-8">Returns & Exchanges</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Return Policy</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 30-day return window from delivery date</li>
                    <li>• Items must be unused and in original condition</li>
                    <li>• Original packaging required for ceramic items</li>
                    <li>• Custom/personalized items cannot be returned</li>
                    <li>• Return shipping costs apply unless item is defective</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Exchange Process</h3>
                  <ol className="space-y-2 text-gray-600">
                    <li>1. Contact our support team to initiate return</li>
                    <li>2. Receive return authorization and instructions</li>
                    <li>3. Pack items securely using original packaging</li>
                    <li>4. Ship using provided return label</li>
                    <li>5. Refund processed within 5-7 business days</li>
                  </ol>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-yellow-50 border border-yellow-200 p-6">
                  <h3 className="text-lg font-medium text-yellow-900 mb-3">Ceramic Care Notice</h3>
                  <p className="text-sm text-yellow-800">
                    Please pack ceramic items very carefully for return shipping. Use bubble wrap, 
                    packing peanuts, or original packaging to prevent damage. We cannot accept 
                    returns of damaged ceramic items unless they arrived damaged.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Refund Timeline</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Processing: 1-2 business days after receipt</li>
                    <li>• Credit card refunds: 3-5 business days</li>
                    <li>• PayPal refunds: 1-2 business days</li>
                    <li>• Bank transfers: 5-7 business days</li>
                  </ul>
                </div>

                <button
                  onClick={() => setActiveSection('contact')}
                  className="w-full bg-gray-900 text-white px-6 py-3 hover:bg-gray-800 transition-colors duration-300"
                >
                  Start a Return
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Shipping Info Section */}
        {activeSection === 'shipping' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-light text-gray-900 mb-8">Shipping Information</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Domestic Shipping (US)</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 border border-gray-200">
                      <div>
                        <p className="font-medium">Standard Shipping</p>
                        <p className="text-sm text-gray-600">5-7 business days</p>
                      </div>
                      <span className="font-medium">$9.99</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 border border-gray-200">
                      <div>
                        <p className="font-medium">Express Shipping</p>
                        <p className="text-sm text-gray-600">2-3 business days</p>
                      </div>
                      <span className="font-medium">$19.99</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 border border-gray-200">
                      <div>
                        <p className="font-medium">Overnight Shipping</p>
                        <p className="text-sm text-gray-600">Next business day</p>
                      </div>
                      <span className="font-medium">$39.99</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Free Shipping</h3>
                  <p className="text-gray-600">
                    Enjoy free standard shipping on all orders over $75 within the continental United States.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">International Shipping</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Available to most countries worldwide</li>
                    <li>• Delivery time: 7-14 business days</li>
                    <li>• Shipping cost calculated at checkout</li>
                    <li>• Customs fees may apply (buyer responsible)</li>
                    <li>• Tracking available for all international orders</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-6">
                  <h3 className="text-lg font-medium text-blue-900 mb-3">Ceramic Packaging</h3>
                  <p className="text-sm text-blue-800">
                    All ceramic items are carefully packaged with protective materials 
                    including bubble wrap, foam inserts, and sturdy boxes to ensure 
                    safe delivery. We guarantee your items will arrive in perfect condition.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Order Processing</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Orders placed before 2 PM EST ship same day</li>
                    <li>• Weekend orders ship on Monday</li>
                    <li>• Custom items require 3-5 days processing</li>
                    <li>• Holiday shipping deadlines posted on homepage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CustomerSupport;
