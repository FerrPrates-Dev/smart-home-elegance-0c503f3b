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
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-amber-500 flex items-center justify-center text-sm font-bold text-primary-foreground shadow-lg">
              SR
            </div>
            <div>
              <p className="font-semibold tracking-wide text-foreground">Smart Roga</p>
              <p className="text-[10px] text-muted-foreground">Domótica e Inmobiliaria</p>
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
            <a
              href="https://wa.me/595994959417?text=Hola%20Smart%20Roga,%20quiero%20automatizar%20mi%20vivienda."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                Consultar por WhatsApp
              </Button>
            </a>
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
              <a
                href="https://wa.me/595994959417?text=Hola%20Smart%20Roga,%20quiero%20automatizar%20mi%20vivienda."
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2"
              >
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold w-full">
                  Consultar por WhatsApp
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
