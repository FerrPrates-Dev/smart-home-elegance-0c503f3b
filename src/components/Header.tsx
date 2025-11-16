import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="text-2xl font-bold">
              <span className="gradient-text">SMART</span>
              <span className="text-foreground ml-2">ROGA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Inicio
            </Link>
            <Link to="/products" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Productos
            </Link>
            <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Quiénes Somos
            </Link>
            <Link to="/blog" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link to="/documentation" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Documentación
            </Link>
            <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Contacto
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                0
              </span>
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              Solicitar Relevamiento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Inicio
              </Link>
              <Link to="/products" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Productos
              </Link>
              <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Quiénes Somos
              </Link>
              <Link to="/blog" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link to="/documentation" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Documentación
              </Link>
              <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Contacto
              </Link>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold w-full mt-2">
                Solicitar Relevamiento
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
