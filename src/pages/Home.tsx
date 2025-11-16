import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { ArrowRight, Shield, Smartphone, TrendingUp, Zap, Home as HomeIcon, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-home.jpg";
import devicesImage from "@/assets/devices-collage.jpg";

const featuredProducts = [
  {
    id: "1",
    name: "Cerradura Smart S808",
    description: "Cerradura digital WiFi, 5 métodos de apertura, huella digital y tarjeta",
    price: 89900,
    image: devicesImage,
    category: "Cerraduras",
    discount: 10
  },
  {
    id: "2",
    name: "Foco RGB Smart WiFi",
    description: "Bombilla inteligente con compatibilidad Zigbee y WiFi, compatible con Alexa y Google",
    price: 12900,
    image: devicesImage,
    category: "Iluminación"
  },
  {
    id: "3",
    name: "Sistema de Riego Programable",
    description: "Sistema de riego programable compatible con WiFi, no incluye temporizador mecánico",
    price: 34900,
    image: devicesImage,
    category: "Climatización",
    discount: 15
  }
];

const benefits = [
  {
    icon: Smartphone,
    title: "Control Remoto Total",
    description: "Controla tu hogar desde cualquier lugar del mundo con tu smartphone"
  },
  {
    icon: Shield,
    title: "Seguridad Avanzada",
    description: "Protección inteligente con alertas en tiempo real y monitoreo 24/7"
  },
  {
    icon: Zap,
    title: "Eficiencia Energética",
    description: "Ahorra hasta 30% en consumo con automatización inteligente"
  },
  {
    icon: TrendingUp,
    title: "Aumenta el Valor",
    description: "Incrementa el valor de tu propiedad con tecnología de vanguardia"
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10" />
          <img 
            src={heroImage} 
            alt="Smart Home" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <HomeIcon className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">Domótica Profesional</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              La Conexión Inteligente con
              <span className="gradient-text block mt-2">Tu Hogar</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Transformamos propiedades con tecnología de automatización. 
              Control, confort y seguridad que aumenta el valor de tu proyecto inmobiliario.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold group">
                Solicitar Relevamiento
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/products">Ver Catálogo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">¿Por Qué Elegir Smart Roga?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluciones integrales de domótica para profesionales inmobiliarios
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Productos Destacados</h2>
              <p className="text-xl text-muted-foreground">
                Las mejores soluciones de automatización para tu proyecto
              </p>
            </div>
            <Button variant="outline" asChild className="hidden md:flex">
              <Link to="/products">
                Ver todo el catálogo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          <div className="text-center mt-8 md:hidden">
            <Button variant="outline" asChild>
              <Link to="/products">
                Ver todo el catálogo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Lock className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para Transformar tu Proyecto?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Agenda una visita sin compromiso. Nuestros especialistas evaluarán tu propiedad 
              y diseñarán la solución perfecta de automatización.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              Solicitar Relevamiento Gratuito
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
