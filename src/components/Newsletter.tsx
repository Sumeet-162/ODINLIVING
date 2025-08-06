import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive updates about our latest collections.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-base text-gray-600 mb-8 font-light">
            Subscribe to receive updates on new collections and special offers
          </p>

          <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 text-sm border border-gray-300 bg-white focus:outline-none focus:border-gray-500 transition-colors"
              required
            />
            <button 
              type="submit" 
              className="bg-gray-900 text-white px-6 py-3 text-sm hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-4">
            By subscribing, you agree to our privacy policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;