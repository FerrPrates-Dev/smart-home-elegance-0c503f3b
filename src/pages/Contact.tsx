import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Estamos aquí para ayudarte. Agenda una visita o contáctanos para cualquier consulta
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Solicitar Relevamiento</h2>
              <p className="text-muted-foreground mb-8">
                Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas para coordinar una visita sin compromiso.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nombre *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Apellido *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tu apellido"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Teléfono *</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+54 9 11 XXXX-XXXX"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Tipo de Proyecto *</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Selecciona una opción</option>
                    <option>Vivienda Unifamiliar</option>
                    <option>Edificio/Desarrollo</option>
                    <option>Proyecto Arquitectónico</option>
                    <option>Diseño de Interiores</option>
                    <option>Otro</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Mensaje</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Cuéntanos más sobre tu proyecto..."
                  />
                </div>
                
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-6">
                  Enviar Solicitud
                </Button>
                
                <p className="text-sm text-muted-foreground">
                  Al enviar este formulario, aceptas que nos pongamos en contacto contigo para discutir tu proyecto.
                </p>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Dirección</h3>
                      <p className="text-muted-foreground">
                        Buenos Aires, Argentina<br />
                        (Atendemos en toda la zona metropolitana)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Teléfono</h3>
                      <p className="text-muted-foreground">
                        +54 9 11 XXXX-XXXX<br />
                        WhatsApp disponible 24/7
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <p className="text-muted-foreground">
                        info@smartroga.com<br />
                        ventas@smartroga.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Horario de Atención</h3>
                      <p className="text-muted-foreground">
                        Lunes a Viernes: 9:00 - 19:00<br />
                        Sábados: 10:00 - 14:00<br />
                        Emergencias: 24/7
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-border bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-lg">¿Prefieres Hablar Directamente?</h3>
                  <p className="text-muted-foreground mb-4">
                    Llámanos o envíanos un WhatsApp y te atenderemos de inmediato
                  </p>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <Phone className="mr-2 h-4 w-4" />
                    Llamar Ahora
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
