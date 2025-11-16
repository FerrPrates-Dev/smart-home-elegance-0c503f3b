import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, Download, Video, Book } from "lucide-react";
import { Button } from "@/components/ui/button";

const documentCategories = [
  {
    icon: FileText,
    title: "Guías de Instalación",
    description: "Manuales detallados para la instalación de cada producto",
    count: 12
  },
  {
    icon: Video,
    title: "Tutoriales en Video",
    description: "Aprende visualmente cómo configurar y usar los dispositivos",
    count: 8
  },
  {
    icon: Book,
    title: "Especificaciones Técnicas",
    description: "Fichas técnicas completas de todos nuestros productos",
    count: 45
  },
  {
    icon: Download,
    title: "Catálogos Descargables",
    description: "Catálogos en PDF con información completa",
    count: 3
  }
];

const faqItems = [
  {
    question: "¿Qué es la domótica y cómo funciona?",
    answer: "La domótica es la integración de tecnología en el hogar para automatizar y controlar diferentes sistemas como iluminación, climatización, seguridad y más. Funciona mediante dispositivos inteligentes conectados a través de WiFi, Zigbee o Bluetooth, que pueden ser controlados desde una aplicación móvil."
  },
  {
    question: "¿Necesito cambiar toda la instalación eléctrica?",
    answer: "No necesariamente. La mayoría de nuestros productos son compatibles con instalaciones eléctricas estándar. En algunos casos, solo se requieren adaptaciones menores. Durante el relevamiento, evaluamos tu instalación actual y te informamos de cualquier modificación necesaria."
  },
  {
    question: "¿Qué pasa si se corta internet?",
    answer: "Los dispositivos inteligentes mantienen su funcionalidad básica incluso sin conexión a internet. Puedes seguir controlándolos manualmente mediante interruptores físicos o botones. Las automatizaciones programadas localmente continuarán funcionando."
  },
  {
    question: "¿Es segura la tecnología smart home?",
    answer: "Sí, trabajamos con marcas certificadas que implementan protocolos de seguridad robustos, incluyendo encriptación de datos y autenticación de dos factores. Además, configuramos tu red doméstica siguiendo las mejores prácticas de seguridad."
  },
  {
    question: "¿Cuánto tiempo toma la instalación?",
    answer: "Depende del tamaño del proyecto. Una instalación básica puede completarse en 1-2 días, mientras que proyectos más complejos pueden tomar una semana. Te proporcionamos un cronograma detallado en la propuesta."
  },
  {
    question: "¿Ofrecen garantía en los productos?",
    answer: "Todos nuestros productos incluyen garantía del fabricante que varía entre 1 y 3 años según la marca y modelo. Adicionalmente, ofrecemos garantía de instalación por 12 meses."
  },
  {
    question: "¿Puedo integrar dispositivos de diferentes marcas?",
    answer: "Sí, diseñamos sistemas que permiten la integración de múltiples marcas a través de plataformas unificadas como Smart Life, Google Home o Alexa. Esto te da flexibilidad para elegir los mejores productos de cada categoría."
  },
  {
    question: "¿Qué tipo de soporte ofrecen después de la instalación?",
    answer: "Ofrecemos soporte técnico 24/7 a través de WhatsApp, email y teléfono. Incluye capacitación inicial, resolución de problemas, actualizaciones de software y mantenimiento preventivo. También proporcionamos tutoriales y documentación completa."
  }
];

const Documentation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Documentación</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Recursos, guías y especificaciones técnicas para todos nuestros productos
          </p>
        </div>
      </section>

      {/* Document Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documentCategories.map((category, index) => (
              <Card key={index} className="border-border card-hover cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <p className="text-sm font-semibold text-primary">{category.count} documentos disponibles</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Documents */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Documentos Populares</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Guía de Instalación - Cerraduras Smart", type: "PDF", size: "2.4 MB" },
              { title: "Manual de Usuario - Sistema de Iluminación", type: "PDF", size: "1.8 MB" },
              { title: "Especificaciones Técnicas - Control de Clima", type: "PDF", size: "3.2 MB" },
              { title: "Tutorial de Configuración - App Smart Life", type: "Video", duration: "12:30" },
              { title: "Catálogo General de Productos 2024", type: "PDF", size: "8.5 MB" },
              { title: "Integración con Google Home y Alexa", type: "PDF", size: "1.5 MB" }
            ].map((doc, index) => (
              <Card key={index} className="border-border hover:border-primary transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {doc.type === "PDF" ? (
                        <FileText className="h-5 w-5 text-primary" />
                      ) : (
                        <Video className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2 leading-tight">{doc.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span>{doc.type}</span>
                        <span>•</span>
                        <span>{doc.size || doc.duration}</span>
                      </div>
                      <Button variant="link" className="p-0 h-auto mt-2 text-primary">
                        <Download className="h-4 w-4 mr-2" />
                        Descargar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Preguntas Frecuentes</h2>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              Respuestas a las consultas más comunes sobre domótica y automatización
            </p>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-semibold">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿No Encontraste lo que Buscabas?
            </h2>
            <p className="text-muted-foreground mb-8">
              Nuestro equipo está disponible para responder cualquier consulta técnica o sobre productos
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Contactar Soporte
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Documentation;
