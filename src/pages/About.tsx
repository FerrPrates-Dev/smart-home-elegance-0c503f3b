import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Award, Clock, Target } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Target,
    title: "Innovación Constante",
    description: "Nos mantenemos a la vanguardia de la tecnología domótica para ofrecer las mejores soluciones del mercado."
  },
  {
    icon: Award,
    title: "Calidad Garantizada",
    description: "Trabajamos solo con marcas reconocidas y ofrecemos garantía completa en todos nuestros productos e instalaciones."
  },
  {
    icon: Users,
    title: "Servicio Personalizado",
    description: "Cada proyecto es único. Diseñamos soluciones a medida que se adaptan perfectamente a tus necesidades."
  },
  {
    icon: Clock,
    title: "Soporte 24/7",
    description: "Nuestro equipo está disponible para asistirte cuando lo necesites, garantizando el funcionamiento óptimo de tu sistema."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Quiénes Somos</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Expertos en automatización del hogar con más de 10 años transformando propiedades
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transformamos Casas en <span className="gradient-text">Hogares Inteligentes</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  En Smart Roga, nos especializamos en llevar la tecnología de automatización del hogar a proyectos inmobiliarios, arquitectónicos y de diseño de interiores. Nuestra misión es crear espacios inteligentes que mejoran la calidad de vida y aumentan el valor de las propiedades.
                </p>
                <p>
                  Con más de una década de experiencia, hemos ayudado a cientos de profesionales del sector inmobiliario a diferenciarse en el mercado mediante la integración de soluciones domóticas de última generación.
                </p>
                <p>
                  Trabajamos con las marcas más reconocidas del mercado como Smart Life, Sonoff, Broadlink, Denon y Hikvision, garantizando calidad, durabilidad y soporte técnico continuo.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">500+</div>
                <div className="text-muted-foreground">Proyectos Completados</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">95%</div>
                <div className="text-muted-foreground">Satisfacción</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">10+</div>
                <div className="text-muted-foreground">Años de Experiencia</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-muted-foreground">Soporte Técnico</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Valores</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo y compromiso con cada cliente
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cómo Trabajamos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Un proceso simple y transparente desde el primer contacto hasta el soporte continuo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Relevamiento</h3>
              <p className="text-muted-foreground">
                Visitamos tu propiedad para evaluar necesidades y diseñar la solución perfecta.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Propuesta</h3>
              <p className="text-muted-foreground">
                Te presentamos un plan detallado con productos, costos y plazos de instalación.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Instalación</h3>
              <p className="text-muted-foreground">
                Nuestro equipo técnico realiza la instalación profesional de todos los dispositivos.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Soporte</h3>
              <p className="text-muted-foreground">
                Ofrecemos capacitación y soporte continuo para garantizar tu satisfacción.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para Comenzar tu Proyecto?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Agenda una visita sin compromiso y descubre cómo podemos transformar tu propiedad
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Solicitar Relevamiento
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contactar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
