import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-darker border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="gradient-text">SMART</span>
              <span className="text-foreground ml-2">ROGA</span>
            </div>
            <p className="text-sm text-muted-foreground">
              La conexión inteligente con tu hogar. Automatización y confort para proyectos inmobiliarios.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Productos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/products?category=locks" className="hover:text-primary transition-colors">Cerraduras Smart</Link></li>
              <li><Link to="/products?category=lighting" className="hover:text-primary transition-colors">Iluminación</Link></li>
              <li><Link to="/products?category=climate" className="hover:text-primary transition-colors">Climatización</Link></li>
              <li><Link to="/products?category=security" className="hover:text-primary transition-colors">Seguridad</Link></li>
              <li><Link to="/products?category=motors" className="hover:text-primary transition-colors">Motores</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">Quiénes Somos</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/documentation" className="hover:text-primary transition-colors">Documentación</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+54 9 11 XXXX-XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@smartroga.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Smart Roga. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
