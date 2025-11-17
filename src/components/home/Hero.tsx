import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, HomeIcon, Shield, Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-home.jpg";

export const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interestedIn: "vivienda"
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Aquí se guardará en Supabase más adelante
    console.log("Lead data:", formData);

    const message = `Hola Smart Roga, acabo de enviar mis datos desde la web.

Nombre: ${formData.name}
Email: ${formData.email}
WhatsApp: ${formData.phone}
Interesado en: ${formData.interestedIn}

Quiero cotizar la automatización de mi vivienda.`;

    window.open(`https://wa.me/595994959417?text=${encodeURIComponent(message)}`, '_blank');
    setLoading(false);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background z-10" />
        <img 
          src={heroImage} 
          alt="Smart Home" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-20 py-12">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
          {/* Left side - Value proposition */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs text-primary font-medium">Domótica premium para proyectos inmobiliarios</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Automatiza tu vivienda y proyectos
              <span className="block gradient-text mt-2">con Smart Roga.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl">
              Cerraduras digitales, iluminación, climatización, seguridad, riego y acceso:
              todo controlado desde tu smartphone. Protección 24/7, confort total y aumento
              del valor de tu propiedad.
            </p>

            {/* Value Cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="border border-border rounded-2xl p-4 bg-card/50 backdrop-blur-sm">
                <Shield className="h-5 w-5 text-primary mb-2" />
                <p className="text-sm font-semibold text-primary mb-1">Seguridad 24/7</p>
                <p className="text-xs text-muted-foreground">Monitoreo inteligente, cámaras y alertas en tiempo real.</p>
              </div>
              <div className="border border-border rounded-2xl p-4 bg-card/50 backdrop-blur-sm">
                <Zap className="h-5 w-5 text-primary mb-2" />
                <p className="text-sm font-semibold text-primary mb-1">Confort Total</p>
                <p className="text-xs text-muted-foreground">Escenas automáticas de iluminación, clima y cortinas.</p>
              </div>
              <div className="border border-border rounded-2xl p-4 bg-card/50 backdrop-blur-sm">
                <TrendingUp className="h-5 w-5 text-primary mb-2" />
                <p className="text-sm font-semibold text-primary mb-1">Valor Inmobiliario</p>
                <p className="text-xs text-muted-foreground">Tu vivienda se convierte en un activo tecnológico.</p>
              </div>
            </div>
          </div>

          {/* Right side - Lead Form */}
          <div className="border border-border rounded-3xl bg-card/80 backdrop-blur-xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-xl font-semibold mb-2">
              Cotiza la automatización de tu vivienda
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Completa el formulario y agenda una asesoría. Te contactamos por WhatsApp.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm">Nombre y apellido</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/60 border-border"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/60 border-border"
                    placeholder="tu@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm">WhatsApp *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-background/60 border-border"
                    placeholder="+595 XXX XXX XXX"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="interest" className="text-sm">¿Qué te gustaría automatizar?</Label>
                <Select
                  value={formData.interestedIn}
                  onValueChange={(value) => setFormData({ ...formData, interestedIn: value })}
                >
                  <SelectTrigger className="bg-background/60 border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vivienda">Vivienda completa</SelectItem>
                    <SelectItem value="iluminacion">Iluminación inteligente</SelectItem>
                    <SelectItem value="climatizacion">Climatización</SelectItem>
                    <SelectItem value="acceso">Accesos y cerraduras</SelectItem>
                    <SelectItem value="seguridad">Seguridad inteligente</SelectItem>
                    <SelectItem value="riego">Riego automatizado</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold group"
              >
                {loading ? 'Enviando...' : 'Enviar y continuar en WhatsApp'}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-[10px] text-muted-foreground text-center">
                Al enviar aceptas nuestras políticas de privacidad y recibir recordatorios por email.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};