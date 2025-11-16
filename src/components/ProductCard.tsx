import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  discount?: number;
}

export const ProductCard = ({ id, name, description, price, image, category, discount }: ProductCardProps) => {
  const discountedPrice = discount ? price * (1 - discount / 100) : price;

  return (
    <Card className="bg-card border-border overflow-hidden card-hover group">
      <CardHeader className="p-0 relative">
        {discount && (
          <Badge className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground font-semibold">
            Ahorra {discount}%
          </Badge>
        )}
        <div className="aspect-square overflow-hidden bg-secondary">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-3">
        <div className="text-xs text-muted-foreground uppercase tracking-wider">
          {category}
        </div>
        <h3 className="font-semibold text-lg leading-tight line-clamp-2">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
        <div className="flex items-baseline gap-2">
          {discount ? (
            <>
              <span className="text-2xl font-bold text-primary">
                ${discountedPrice.toLocaleString()}
              </span>
              <span className="text-sm text-muted-foreground line-through">
                ${price.toLocaleString()}
              </span>
            </>
          ) : (
            <span className="text-2xl font-bold text-foreground">
              ${price.toLocaleString()}
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex gap-2">
        <Button 
          className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Añadir a cesta
        </Button>
        <Button variant="outline" asChild>
          <Link to={`/products/${id}`}>
            Detalles
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
