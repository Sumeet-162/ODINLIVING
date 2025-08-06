import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard, Truck, Shield, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Sample cart data - would come from state management in real app
const sampleCartItems = [
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

const Checkout = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Shipping Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    
    // Payment Information
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
    
    // Billing same as shipping
    billingDifferent: false,
    billingAddress: "",
    billingCity: "",
    billingState: "",
    billingZip: "",
    
    // Options
    saveInfo: false,
    newsletter: false,
    shippingMethod: "standard"
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);

  // Calculate totals
  const subtotal = sampleCartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = formData.shippingMethod === "express" ? 25 : subtotal > 100 ? 0 : 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleInputChange = (field: string, value: string | boolean) => {
    let formattedValue = value;
    
    // Format card number (add spaces every 4 digits)
    if (field === 'cardNumber' && typeof value === 'string') {
      formattedValue = value
        .replace(/\s/g, '') // Remove all spaces
        .replace(/(.{4})/g, '$1 ') // Add space after every 4 digits
        .trim() // Remove trailing space
        .substring(0, 19); // Limit to 16 digits + 3 spaces
    }
    
    // Format expiry date (MM/YY)
    if (field === 'expiryDate' && typeof value === 'string') {
      formattedValue = value
        .replace(/\D/g, '') // Remove non-digits
        .replace(/(\d{2})(\d)/, '$1/$2') // Add slash after 2 digits
        .substring(0, 5); // Limit to MM/YY
    }
    
    // Format CVV (digits only)
    if (field === 'cvv' && typeof value === 'string') {
      formattedValue = value.replace(/\D/g, '').substring(0, 4);
    }
    
    setFormData(prev => ({ ...prev, [field]: formattedValue }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      // Validate shipping information
      if (!formData.firstName) newErrors.firstName = "First name is required";
      if (!formData.lastName) newErrors.lastName = "Last name is required";
      if (!formData.email) newErrors.email = "Email is required";
      if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
      if (!formData.address) newErrors.address = "Address is required";
      if (!formData.city) newErrors.city = "City is required";
      if (!formData.state) newErrors.state = "State/Province is required";
      if (!formData.zipCode) newErrors.zipCode = "ZIP/Postal code is required";
      if (!formData.country) newErrors.country = "Country is required";
    }

    if (step === 2) {
      // Validate payment information
      if (!formData.cardNumber) {
        newErrors.cardNumber = "Card number is required";
      } else {
        // Remove spaces and validate card number
        const cleanCardNumber = formData.cardNumber.replace(/\s/g, '');
        if (!/^\d{13,19}$/.test(cleanCardNumber)) {
          newErrors.cardNumber = "Please enter a valid card number";
        }
      }
      
      if (!formData.expiryDate) {
        newErrors.expiryDate = "Expiry date is required";
      } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) {
        newErrors.expiryDate = "Please enter date in MM/YY format";
      } else {
        // Check if card is expired
        const [month, year] = formData.expiryDate.split('/');
        const currentDate = new Date();
        const expiry = new Date(2000 + parseInt(year), parseInt(month) - 1);
        if (expiry < currentDate) {
          newErrors.expiryDate = "Card has expired";
        }
      }
      
      if (!formData.cvv) {
        newErrors.cvv = "CVV is required";
      } else if (!/^\d{3,4}$/.test(formData.cvv)) {
        newErrors.cvv = "CVV must be 3 or 4 digits";
      }
      
      if (!formData.cardName) newErrors.cardName = "Cardholder name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handlePlaceOrder = async () => {
    if (!validateStep(2)) return;

    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Navigate to order confirmation
    navigate('/order-confirmation', { 
      state: { 
        orderNumber: `KC${Date.now()}`,
        total: total.toFixed(2),
        items: sampleCartItems
      }
    });
  };

  const steps = [
    { number: 1, title: "Shipping", description: "Delivery information" },
    { number: 2, title: "Payment", description: "Payment details" },
    { number: 3, title: "Review", description: "Confirm order" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container px-4 py-8 max-w-6xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/cart')}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={16} />
          Back to Cart
        </button>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-medium transition-colors ${
                    currentStep >= step.number 
                      ? 'bg-gray-900 border-gray-900 text-white' 
                      : 'border-gray-300 text-gray-500'
                  }`}>
                    {currentStep > step.number ? <Check size={16} /> : step.number}
                  </div>
                  <div className="mt-2 text-center">
                    <div className="text-xs font-medium text-gray-900">{step.title}</div>
                    <div className="text-xs text-gray-500">{step.description}</div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    currentStep > step.number ? 'bg-gray-900' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 md:p-8 shadow-sm">
              {/* Step 1: Shipping Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-medium text-gray-900 mb-6">Shipping Information</h2>
                    
                    {/* Contact Information */}
                    <div className="space-y-4 mb-8">
                      <h3 className="text-sm font-medium text-gray-900">Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-gray-700 mb-1">First Name *</label>
                          <input
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            className={`w-full px-3 py-2 border text-sm focus:outline-none focus:border-gray-500 transition-colors ${
                              errors.firstName ? 'border-red-500' : 'border-gray-300'
                            }`}
                          />
                          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                        </div>
                        <div>
                          <label className="block text-sm text-gray-700 mb-1">Last Name *</label>
                          <input
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            className={`w-full px-3 py-2 border text-sm focus:outline-none focus:border-gray-500 transition-colors ${
                              errors.lastName ? 'border-red-500' : 'border-gray-300'
                            }`}
                          />
                          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-gray-700 mb-1">Email Address *</label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className={`w-full px-3 py-2 border text-sm focus:outline-none focus:border-gray-500 transition-colors ${
                              errors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                          />
                          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                        <div>
                          <label className="block text-sm text-gray-700 mb-1">Phone Number</label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:border-gray-500 transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Shipping Address */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium text-gray-900">Shipping Address</h3>
                      <div>
                        <label className="block text-sm text-gray-700 mb-1">Address *</label>
                        <input
                          type="text"
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          className={`w-full px-3 py-2 border text-sm focus:outline-none focus:border-gray-500 transition-colors ${
                            errors.address ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-sm text-gray-700 mb-1">Apartment, suite, etc. (optional)</label>
                        <input
                          type="text"
                          value={formData.apartment}
                          onChange={(e) => handleInputChange('apartment', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:border-gray-500 transition-colors"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm text-gray-700 mb-1">City *</label>
                          <input
                            type="text"
                            value={formData.city}
                            onChange={(e) => handleInputChange('city', e.target.value)}
                            className={`w-full px-3 py-2 border text-sm focus:outline-none focus:border-gray-500 transition-colors ${
                              errors.city ? 'border-red-500' : 'border-gray-300'
                            }`}
                          />
                          {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                        </div>
                        <div>
                          <label className="block text-sm text-gray-700 mb-1">State/Province *</label>
                          <input
                            type="text"
                            value={formData.state}
                            onChange={(e) => handleInputChange('state', e.target.value)}
                            placeholder="Enter state or province"
                            className={`w-full px-3 py-2 border text-sm focus:outline-none focus:border-gray-500 transition-colors ${
                              errors.state ? 'border-red-500' : 'border-gray-300'
                            }`}
                          />
                          {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                        </div>
                        <div>
                          <label className="block text-sm text-gray-700 mb-1">ZIP/Postal Code *</label>
                          <input
                            type="text"
                            value={formData.zipCode}
                            onChange={(e) => handleInputChange('zipCode', e.target.value)}
                            className={`w-full px-3 py-2 border text-sm focus:outline-none focus:border-gray-500 transition-colors ${
                              errors.zipCode ? 'border-red-500' : 'border-gray-300'
                            }`}
                          />
                          {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
                        </div>
                      </div>

                      {/* Country Selection */}
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm text-gray-700 mb-1">Country *</label>
                          <input
                            type="text"
                            value={formData.country}
                            onChange={(e) => handleInputChange('country', e.target.value)}
                            placeholder="Enter country name"
                            className={`w-full px-3 py-2 border text-sm focus:outline-none focus:border-gray-500 transition-colors ${
                              errors.country ? 'border-red-500' : 'border-gray-300'
                            }`}
                          />
                          {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                        </div>
                      </div>
                    </div>

                    {/* Shipping Method */}
                    <div className="space-y-4 pt-6 border-t border-gray-200">
                      <h3 className="text-sm font-medium text-gray-900">Shipping Method</h3>
                      <div className="space-y-3">
                        <label className="flex items-center p-3 border border-gray-200 rounded cursor-pointer hover:border-gray-300 transition-colors">
                          <input
                            type="radio"
                            value="standard"
                            checked={formData.shippingMethod === "standard"}
                            onChange={(e) => handleInputChange('shippingMethod', e.target.value)}
                            className="mr-3"
                          />
                          <div className="flex-1 flex justify-between items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900">Standard Shipping</div>
                              <div className="text-xs text-gray-500">5-7 business days</div>
                            </div>
                            <div className="text-sm font-medium text-gray-900">
                              {subtotal > 100 ? 'Free' : '$15.00'}
                            </div>
                          </div>
                        </label>
                        
                        <label className="flex items-center p-3 border border-gray-200 rounded cursor-pointer hover:border-gray-300 transition-colors">
                          <input
                            type="radio"
                            value="express"
                            checked={formData.shippingMethod === "express"}
                            onChange={(e) => handleInputChange('shippingMethod', e.target.value)}
                            className="mr-3"
                          />
                          <div className="flex-1 flex justify-between items-center">
                            <div>
                              <div className="text-sm font-medium text-gray-900">Express Shipping</div>
                              <div className="text-xs text-gray-500">2-3 business days</div>
                            </div>
                            <div className="text-sm font-medium text-gray-900">$25.00</div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end pt-6 border-t border-gray-200">
                    <button
                      onClick={handleNextStep}
                      className="bg-gray-900 text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Payment Information */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-medium text-gray-900 mb-6">Payment Information</h2>
                    
                    {/* Payment Method */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <CreditCard size={20} className="text-gray-600" />
                        <h3 className="text-sm font-medium text-gray-900">Credit Card</h3>
                      </div>
                      
                      <div>
                        <label className="block text-sm text-gray-700 mb-1">Card Number *</label>
                        <input
                          type="text"
                          value={formData.cardNumber}
                          onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                          placeholder="1234 5678 9012 3456"
                          className={`w-full px-3 py-2 border text-sm focus:outline-none focus:border-gray-500 transition-colors ${
                            errors.cardNumber ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-gray-700 mb-1">Expiry Date *</label>
                          <input
                            type="text"
                            value={formData.expiryDate}
                            onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                            placeholder="MM/YY"
                            className={`w-full px-3 py-2 border text-sm focus:outline-none focus:border-gray-500 transition-colors ${
                              errors.expiryDate ? 'border-red-500' : 'border-gray-300'
                            }`}
                          />
                          {errors.expiryDate && <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>}
                        </div>
                        <div>
                          <label className="block text-sm text-gray-700 mb-1">CVV *</label>
                          <input
                            type="text"
                            value={formData.cvv}
                            onChange={(e) => handleInputChange('cvv', e.target.value)}
                            placeholder="123"
                            className={`w-full px-3 py-2 border text-sm focus:outline-none focus:border-gray-500 transition-colors ${
                              errors.cvv ? 'border-red-500' : 'border-gray-300'
                            }`}
                          />
                          {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm text-gray-700 mb-1">Cardholder Name *</label>
                        <input
                          type="text"
                          value={formData.cardName}
                          onChange={(e) => handleInputChange('cardName', e.target.value)}
                          className={`w-full px-3 py-2 border text-sm focus:outline-none focus:border-gray-500 transition-colors ${
                            errors.cardName ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {errors.cardName && <p className="text-red-500 text-xs mt-1">{errors.cardName}</p>}
                      </div>
                    </div>

                    {/* Billing Address */}
                    <div className="space-y-4 pt-6 border-t border-gray-200">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="billingDifferent"
                          checked={formData.billingDifferent}
                          onChange={(e) => handleInputChange('billingDifferent', e.target.checked)}
                          className="mr-2"
                        />
                        <label htmlFor="billingDifferent" className="text-sm text-gray-700">
                          Billing address is different from shipping address
                        </label>
                      </div>
                      
                      {formData.billingDifferent && (
                        <div className="space-y-4 p-4 bg-gray-50 rounded">
                          <h4 className="text-sm font-medium text-gray-900">Billing Address</h4>
                          {/* Add billing address fields similar to shipping */}
                          <div>
                            <label className="block text-sm text-gray-700 mb-1">Address</label>
                            <input
                              type="text"
                              value={formData.billingAddress}
                              onChange={(e) => handleInputChange('billingAddress', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:border-gray-500 transition-colors"
                            />
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div>
                              <label className="block text-sm text-gray-700 mb-1">City</label>
                              <input
                                type="text"
                                value={formData.billingCity}
                                onChange={(e) => handleInputChange('billingCity', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:border-gray-500 transition-colors"
                              />
                            </div>
                            <div>
                              <label className="block text-sm text-gray-700 mb-1">State</label>
                              <input
                                type="text"
                                value={formData.billingState}
                                onChange={(e) => handleInputChange('billingState', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:border-gray-500 transition-colors"
                              />
                            </div>
                            <div>
                              <label className="block text-sm text-gray-700 mb-1">ZIP Code</label>
                              <input
                                type="text"
                                value={formData.billingZip}
                                onChange={(e) => handleInputChange('billingZip', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:border-gray-500 transition-colors"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between pt-6 border-t border-gray-200">
                    <button
                      onClick={handlePreviousStep}
                      className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-300"
                    >
                      Back to Shipping
                    </button>
                    <button
                      onClick={handleNextStep}
                      className="bg-gray-900 text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
                    >
                      Review Order
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Order Review */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-medium text-gray-900 mb-6">Review Your Order</h2>
                    
                    {/* Order Items */}
                    <div className="space-y-4 mb-8">
                      <h3 className="text-sm font-medium text-gray-900">Order Items</h3>
                      {sampleCartItems.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover bg-gray-100"
                          />
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-gray-900">{item.name}</h4>
                            <p className="text-xs text-gray-500">Quantity: {item.quantity}</p>
                          </div>
                          <div className="text-sm font-medium text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Shipping Information Summary */}
                    <div className="space-y-4 mb-8 p-4 bg-gray-50 rounded">
                      <h3 className="text-sm font-medium text-gray-900">Shipping Information</h3>
                      <div className="text-sm text-gray-600">
                        <p>{formData.firstName} {formData.lastName}</p>
                        <p>{formData.address}</p>
                        {formData.apartment && <p>{formData.apartment}</p>}
                        <p>{formData.city}, {formData.state} {formData.zipCode}</p>
                        <p className="mt-2 font-medium">
                          {formData.shippingMethod === "express" ? "Express Shipping" : "Standard Shipping"}
                        </p>
                      </div>
                    </div>

                    {/* Payment Information Summary */}
                    <div className="space-y-4 mb-8 p-4 bg-gray-50 rounded">
                      <h3 className="text-sm font-medium text-gray-900">Payment Information</h3>
                      <div className="text-sm text-gray-600">
                        <p>**** **** **** {formData.cardNumber.slice(-4)}</p>
                        <p>{formData.cardName}</p>
                      </div>
                    </div>

                    {/* Security Features */}
                    <div className="flex items-center gap-6 p-4 bg-green-50 rounded border border-green-200">
                      <Shield className="text-green-600" size={24} />
                      <div>
                        <h4 className="text-sm font-medium text-green-900">Secure Checkout</h4>
                        <p className="text-xs text-green-700">Your payment information is encrypted and secure</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between pt-6 border-t border-gray-200">
                    <button
                      onClick={handlePreviousStep}
                      className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-300"
                    >
                      Back to Payment
                    </button>
                    <button
                      onClick={handlePlaceOrder}
                      disabled={isProcessing}
                      className="bg-gray-900 text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      {isProcessing ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          Processing...
                        </>
                      ) : (
                        `Place Order - $${total.toFixed(2)}`
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 shadow-sm sticky top-8">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Order Summary</h3>
              
              {/* Order Items */}
              <div className="space-y-3 mb-6">
                {sampleCartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover bg-gray-100 rounded"
                      />
                      <span className="absolute -top-2 -right-2 bg-gray-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 truncate">{item.name}</h4>
                      <p className="text-xs text-gray-500">${item.price.toFixed(2)} each</p>
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing Breakdown */}
              <div className="space-y-3 py-4 border-t border-gray-200">
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
                  <div className="flex justify-between font-medium text-base">
                    <span className="text-gray-900">Total</span>
                    <span className="text-gray-900">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Shield size={14} />
                    <span>Secure Payment</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Truck size={14} />
                    <span>Free Returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
