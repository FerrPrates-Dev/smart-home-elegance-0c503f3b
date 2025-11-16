import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import devicesImage from "@/assets/devices-collage.jpg";

const categories = [
  { id: "all", name: "Todos", count: 89 },
  { id: "locks", name: "Cerraduras", count: 33 },
  { id: "lighting", name: "Iluminación", count: 14 },
  { id: "climate", name: "Climatización", count: 14 },
  { id: "motors", name: "Motores", count: 14 },
  { id: "security", name: "Seguridad - Alarma", count: 14 }
];

const brands = ["Smart Life", "Sonoff", "Broadlink", "Denon", "Hikvision"];

const allProducts = [
  {
    id: "1",
    name: "Cerradura Smart S808",
    description: "Cerradura digital WiFi, 5 métodos de apertura, huella digital y tarjeta",
    price: 89900,
    image: devicesImage,
    category: "locks",
    discount: 10
  },
  {
    id: "2",
    name: "Foco RGB Smart WiFi",
    description: "Bombilla inteligente con compatibilidad Zigbee y WiFi",
    price: 12900,
    image: devicesImage,
    category: "lighting"
  },
  {
    id: "3",
    name: "Tira LED RGB 5 Metros",
    description: "Tira LED RGB CUT de 5 metros DC 12V",
    price: 24900,
    image: devicesImage,
    category: "lighting"
  },
  {
    id: "4",
    name: "Cerradura Smart S933 MAX",
    description: "Cerradura digital WiFi, 6 métodos de apertura, huella digital, tarjeta, PIN",
    price: 124900,
    image: devicesImage,
    category: "locks",
    discount: 20
  },
  {
    id: "5",
    name: "Motor de Persiana Smart",
    description: "Motor de persiana Roller, requiere HUB Zemismart para funcionar",
    price: 54900,
    image: devicesImage,
    category: "motors"
  },
  {
    id: "6",
    name: "Interruptor Cristal 1-2-3 Botones",
    description: "Interruptor de luz de pared acrílico templado smart",
    price: 18900,
    image: devicesImage,
    category: "lighting"
  },
  {
    id: "7",
    name: "Cerradura Smart S607L BT",
    description: "Cerradura Smart S607L Desbloqueo de tarjeta/ Huella digital/ Clave convencional",
    price: 74900,
    image: devicesImage,
    category: "locks"
  },
  {
    id: "8",
    name: "Sistema de Riego Programable",
    description: "Sistema de riego programable compatible con WiFi, no incluye temporizador mecánico",
    price: 34900,
    image: devicesImage,
    category: "climate",
    discount: 15
  },
  {
    id: "9",
    name: "Cinta LED Ambilight Smart",
    description: "Cinta LED Ambilight para retroiluminación de TV/PC, transmisión en la pantalla",
    price: 44900,
    image: devicesImage,
    category: "lighting"
  }
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const filteredProducts = selectedCategory === "all" 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Catálogo de Productos</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explora nuestra amplia gama de soluciones de domótica para automatizar tu hogar
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="space-y-6 sticky top-24">
                {/* Categories */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-4 text-primary">Categorías</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Button
                        key={category.id}
                        variant={selectedCategory === category.id ? "default" : "ghost"}
                        className="w-full justify-between"
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        <span>{category.name}</span>
                        <Badge variant="secondary">{category.count}</Badge>
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Brands */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-4 text-primary">Marcas</h3>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center gap-2 text-sm">
                        <span className="text-primary">▸</span>
                        <span className="text-foreground">{brand}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-4 text-primary">Recomendados</h3>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img 
                      src={devicesImage}
                      alt="Producto recomendado"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="mt-3 font-semibold">Cerradura Smart S808</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Cerradura digital WiFi, 5 métodos de apertura
                  </p>
                  <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                    Añadir a cesta
                  </Button>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <p className="text-muted-foreground">
                  Mostrando {filteredProducts.length} productos
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    {...product} 
                    category={categories.find(c => c.id === product.category)?.name || ""} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
