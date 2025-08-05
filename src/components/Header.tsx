import { Search, Menu, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-foreground font-display">
            Ceramics
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Shop
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Collections
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9 hidden md:flex">
            <User className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <ShoppingBag className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9 md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;