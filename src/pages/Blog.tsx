import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import devicesImage from "@/assets/devices-collage.jpg";

const blogPosts = [
  {
    id: "1",
    title: "5 Razones para Automatizar tu Propiedad Antes de Venderla",
    excerpt: "Descubre cómo la domótica puede aumentar el valor de tu propiedad hasta un 20% y atraer más compradores potenciales.",
    category: "Inversión",
    date: "15 Mar 2024",
    image: devicesImage,
    readTime: "5 min"
  },
  {
    id: "2",
    title: "Cerraduras Inteligentes: Guía Completa para Profesionales",
    excerpt: "Todo lo que arquitectos y desarrolladores necesitan saber sobre la integración de cerraduras smart en proyectos residenciales.",
    category: "Tecnología",
    date: "10 Mar 2024",
    image: devicesImage,
    readTime: "8 min"
  },
  {
    id: "3",
    title: "Iluminación Smart: Ahorro y Diseño en Armonía",
    excerpt: "Cómo la iluminación inteligente transforma espacios mientras reduce costos energéticos significativamente.",
    category: "Diseño",
    date: "5 Mar 2024",
    image: devicesImage,
    readTime: "6 min"
  },
  {
    id: "4",
    title: "Domótica en Edificios: Casos de Éxito",
    excerpt: "Analizamos proyectos reales donde la automatización marcó la diferencia en el éxito comercial.",
    category: "Casos de Estudio",
    date: "1 Mar 2024",
    image: devicesImage,
    readTime: "10 min"
  },
  {
    id: "5",
    title: "Seguridad Inteligente para el Hogar Moderno",
    excerpt: "Las últimas tendencias en sistemas de seguridad automatizados y cómo implementarlos efectivamente.",
    category: "Seguridad",
    date: "25 Feb 2024",
    image: devicesImage,
    readTime: "7 min"
  },
  {
    id: "6",
    title: "Climatización Inteligente: Confort y Eficiencia",
    excerpt: "Optimiza el consumo energético sin sacrificar el confort con sistemas de climatización automatizados.",
    category: "Eficiencia",
    date: "20 Feb 2024",
    image: devicesImage,
    readTime: "6 min"
  }
];

const categories = ["Todos", "Tecnología", "Diseño", "Inversión", "Casos de Estudio", "Seguridad", "Eficiencia"];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Insights, guías y tendencias sobre domótica y automatización del hogar
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Badge 
                key={category}
                variant="secondary"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto">
                <img 
                  src={devicesImage}
                  alt="Featured post"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-primary text-primary-foreground">Destacado</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  El Futuro de la Domótica en Proyectos Inmobiliarios
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  Exploramos las tendencias que están revolucionando el mercado inmobiliario y cómo los profesionales pueden aprovecharlas para destacar.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>20 Mar 2024</span>
                  </div>
                  <span>•</span>
                  <span>12 min de lectura</span>
                </div>
                <Button className="w-fit bg-primary text-primary-foreground hover:bg-primary/90">
                  Leer artículo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Últimas Publicaciones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden border-border card-hover group">
                <CardHeader className="p-0">
                  <div className="aspect-video overflow-hidden bg-secondary">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-3">
                    <span className="text-sm text-muted-foreground">{post.readTime} de lectura</span>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Leer más
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Mantente Actualizado
            </h2>
            <p className="text-muted-foreground mb-8">
              Recibe las últimas novedades sobre domótica y automatización directamente en tu correo
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
