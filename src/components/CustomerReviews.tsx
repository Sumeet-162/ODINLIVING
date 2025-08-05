import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Chen",
    rating: 5,
    text: "These bowls are absolutely beautiful! The craftsmanship is exceptional and they feel wonderful in your hands. Perfect for my morning routine.",
    product: "Handcrafted Bowl Set",
    date: "2 weeks ago",
    avatar: "SC"
  },
  {
    id: 2,
    name: "Michael Torres",
    rating: 5,
    text: "I bought the complete dinner set and couldn't be happier. Each piece is unique and the quality is outstanding. Worth every penny!",
    product: "Complete Ceramic Set",
    date: "1 month ago",
    avatar: "MT"
  },
  {
    id: 3,
    name: "Emma Wilson",
    rating: 4,
    text: "Love my new mugs! They keep my coffee warm longer than any other cups I've used. The earth tones match my kitchen perfectly.",
    product: "Modern Mug Collection",
    date: "3 weeks ago",
    avatar: "EW"
  }
];

const CustomerReviews = () => {
  return (
    <section className="py-16 bg-secondary/20">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what people are saying about our handcrafted ceramics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card 
              key={review.id} 
              className="border-0 bg-card hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < review.rating ? 'fill-primary text-primary' : 'text-muted-foreground'}`} 
                    />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-foreground leading-relaxed mb-6">
                  "{review.text}"
                </blockquote>

                {/* Product */}
                <p className="text-sm text-primary font-medium mb-4">
                  {review.product}
                </p>

                {/* Customer Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">
                      {review.avatar}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">
                      {review.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {review.date}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-card rounded-lg shadow-soft">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <div className="text-left">
              <div className="font-bold text-foreground">4.8 out of 5</div>
              <div className="text-sm text-muted-foreground">Based on 500+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;