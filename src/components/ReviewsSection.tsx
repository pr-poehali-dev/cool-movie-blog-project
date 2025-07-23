import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Movie {
  id: number;
  title: string;
  director: string;
  year: number;
  genre: string;
  rating: number;
  poster: string;
  description: string;
}

interface ReviewsSectionProps {
  filteredMovies: Movie[];
}

const ReviewsSection = ({ filteredMovies }: ReviewsSectionProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon 
        key={i} 
        name={i < rating ? "Star" : "Star"} 
        size={16} 
        className={i < rating ? "text-secondary fill-current" : "text-muted-foreground"}
      />
    ));
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-bebas mb-12 text-center tracking-wider">
          ПОСЛЕДНИЕ <span className="text-primary">ОБЗОРЫ</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMovies.map((movie) => (
            <Card key={movie.id} className="group hover:transform hover:scale-105 transition-all duration-300 bg-card border-border">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  {movie.genre}
                </Badge>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bebas tracking-wide">{movie.title}</CardTitle>
                  <span className="text-secondary font-bold text-lg">{movie.year}</span>
                </div>
                <p className="text-muted-foreground">Режиссер: {movie.director}</p>
                <div className="flex items-center gap-2">
                  {renderStars(movie.rating)}
                  <span className="text-sm text-muted-foreground ml-2">{movie.rating}/5</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{movie.description}</p>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon name="Eye" size={16} className="mr-2" />
                  Читать обзор
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;