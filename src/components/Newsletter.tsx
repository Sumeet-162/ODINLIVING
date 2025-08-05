import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
        description: "You'll receive updates about our latest collections and special offers.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-primary/5">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mb-4">
            Join Our Community
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Stay updated on new collections, special offers, and the stories behind our creations. 
            Subscribe to our newsletter for exclusive access.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 px-4 bg-background border-border"
              required
            />
            <Button 
              type="submit" 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12"
            >
              Subscribe
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            By subscribing, you agree to our privacy policy. Unsubscribe at any time.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-primary text-xl">✨</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Exclusive Access</h3>
              <p className="text-sm text-muted-foreground">
                Be the first to see new collections and limited releases
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-primary text-xl">💝</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Special Offers</h3>
              <p className="text-sm text-muted-foreground">
                Receive exclusive discounts and member-only promotions
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-primary text-xl">📖</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Behind the Scenes</h3>
              <p className="text-sm text-muted-foreground">
                Learn about our artisans and the pottery-making process
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;