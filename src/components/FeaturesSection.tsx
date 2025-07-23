import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-bebas mb-12 text-center tracking-wider">
          РАЗДЕЛЫ <span className="text-primary">БЛОГА</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="text-center hover:transform hover:scale-105 transition-all duration-300 bg-background">
            <CardHeader>
              <Icon name="Film" size={48} className="mx-auto mb-4 text-primary" />
              <CardTitle className="font-bebas text-xl tracking-wide">ОБЗОРЫ ФИЛЬМОВ</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Подробные разборы новинок кино и классических фильмов</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:transform hover:scale-105 transition-all duration-300 bg-background">
            <CardHeader>
              <Icon name="Trophy" size={48} className="mx-auto mb-4 text-secondary" />
              <CardTitle className="font-bebas text-xl tracking-wide">ТОПЫ И РЕЙТИНГИ</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Лучшие фильмы по жанрам, годам и режиссерам</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:transform hover:scale-105 transition-all duration-300 bg-background">
            <CardHeader>
              <Icon name="PlayCircle" size={48} className="mx-auto mb-4 text-primary" />
              <CardTitle className="font-bebas text-xl tracking-wide">ТРЕЙЛЕРЫ</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Коллекция трейлеров самых ожидаемых премьер</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:transform hover:scale-105 transition-all duration-300 bg-background">
            <CardHeader>
              <Icon name="Monitor" size={48} className="mx-auto mb-4 text-secondary" />
              <CardTitle className="font-bebas text-xl tracking-wide">СЕРИАЛЫ</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Обзоры и рецензии на популярные телесериалы</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:transform hover:scale-105 transition-all duration-300 bg-background">
            <CardHeader>
              <Icon name="FileText" size={48} className="mx-auto mb-4 text-primary" />
              <CardTitle className="font-bebas text-xl tracking-wide">СТАТЬИ</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Аналитические материалы о кинематографе</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:transform hover:scale-105 transition-all duration-300 bg-background">
            <CardHeader>
              <Icon name="Mail" size={48} className="mx-auto mb-4 text-secondary" />
              <CardTitle className="font-bebas text-xl tracking-wide">КОНТАКТЫ</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Связь с редакцией и предложения</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;