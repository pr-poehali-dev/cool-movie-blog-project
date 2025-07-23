import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const movieReviews = [
    {
      id: 1,
      title: "Дюна: Часть вторая",
      director: "Дени Вильнёв",
      year: 2024,
      genre: "Фантастика",
      rating: 5,
      poster: "img/e1939eb9-a97f-4525-b86e-1dc21b98e111.jpg",
      description: "Эпическое продолжение космической саги о Поле Атрейдесе"
    },
    {
      id: 2,
      title: "Оппенгеймер",
      director: "Кристофер Нолан",
      year: 2023,
      genre: "Драма",
      rating: 5,
      poster: "img/e1939eb9-a97f-4525-b86e-1dc21b98e111.jpg",
      description: "Биографическая драма о создателе атомной бомбы"
    },
    {
      id: 3,
      title: "Джон Уик 4",
      director: "Чад Стахелски",
      year: 2023,
      genre: "Боевик",
      rating: 4,
      poster: "img/e1939eb9-a97f-4525-b86e-1dc21b98e111.jpg",
      description: "Финальная глава легендарного киллера"
    }
  ];

  const genres = ["Все", "Боевик", "Драма", "Комедия", "Фантастика", "Ужасы", "Триллер"];
  const years = ["Все", "2024", "2023", "2022", "2021", "2020"];

  const filteredMovies = movieReviews.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         movie.director.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === '' || selectedGenre === 'Все' || movie.genre === selectedGenre;
    const matchesYear = selectedYear === '' || selectedYear === 'Все' || movie.year.toString() === selectedYear;
    
    return matchesSearch && matchesGenre && matchesYear;
  });

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
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bebas tracking-wider text-primary">CINEMA</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-primary transition-colors">Главная</a>
              <a href="#" className="hover:text-primary transition-colors">Обзоры</a>
              <a href="#" className="hover:text-primary transition-colors">Топы</a>
              <a href="#" className="hover:text-primary transition-colors">Трейлеры</a>
              <a href="#" className="hover:text-primary transition-colors">Статьи</a>
              <a href="#" className="hover:text-primary transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-background to-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-6xl font-bebas mb-6 tracking-wider">
            КИНЕМАТОГРАФИЧЕСКИЙ <span className="text-primary">БЛОГ</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Профессиональные обзоры, рейтинги и анализ лучших фильмов современности
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть трейлеры
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Читать обзоры
            </Button>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bebas mb-8 text-center tracking-wider">УМНЫЙ ПОИСК</h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="relative">
                <Icon name="Search" size={20} className="absolute left-3 top-3 text-muted-foreground" />
                <Input
                  placeholder="Поиск по названию, актерам, режиссерам..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-background"
                />
              </div>
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="px-3 py-2 bg-background border border-border rounded-md"
              >
                {genres.map(genre => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-3 py-2 bg-background border border-border rounded-md"
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
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

      {/* Features Section */}
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

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h4 className="text-3xl font-bebas tracking-wider text-primary mb-4">CINEMA</h4>
            <p className="text-muted-foreground mb-6">Ваш путеводитель в мире кинематографа</p>
            <div className="flex justify-center space-x-6">
              <Icon name="Instagram" size={24} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
              <Icon name="Twitter" size={24} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
              <Icon name="Youtube" size={24} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
              <Icon name="Facebook" size={24} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;