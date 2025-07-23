import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Reviews = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  const movieReviews = [
    {
      id: 1,
      title: "Фантастическая четверка: Первые шаги",
      director: "Мэтт Шекман", 
      year: 2025,
      genre: "Фантастика",
      rating: 4,
      poster: "https://cdn.poehali.dev/files/41bb1792-8a9c-49b4-abbd-942daa7ce881.jpg",
      description: "Перезапуск супергеройской команды в ретрофутуристическом стиле 60-х",
      fullReview: "Смелое решение с ретроатмосферой и акцентом на семейных отношениях. Педро Паскаль убедителен в роли Рида Ричардса.",
      pros: ["Уникальная ретроатмосфера", "Сильные семейные линии", "Отличные спецэффекты"],
      cons: ["Неидеальный CGI Существа", "Предсказуемый сюжет"],
      link: "/reviews/fantastic-four"
    },
    {
      id: 2,
      title: "Дюна: Часть вторая",
      director: "Дени Вильнёв",
      year: 2024,
      genre: "Фантастика",
      rating: 5,
      poster: "img/6a5cbe7c-b185-4fec-ab31-936ef2860c2d.jpg",
      description: "Эпическое продолжение космической саги о Поле Атрейдесе",
      fullReview: "Вильнёв снова доказывает, что умеет снимать визуально ошеломляющее кино. Каждый кадр — произведение искусства.",
      pros: ["Потрясающая визуализация", "Глубокая проработка персонажей", "Эпический масштаб"],
      cons: ["Медленный темп", "Требует знания первой части"]
    },
    {
      id: 2,
      title: "Оппенгеймер",
      director: "Кристофер Нолан",
      year: 2023,
      genre: "Драма",
      rating: 5,
      poster: "img/6a5cbe7c-b185-4fec-ab31-936ef2860c2d.jpg",
      description: "Биографическая драма о создателе атомной бомбы",
      fullReview: "Нолан создал мастерское произведение о моральной дилемме ученого. Фильм заставляет задуматься о цене прогресса.",
      pros: ["Превосходная игра актеров", "Сложная структура повествования", "Актуальная тема"],
      cons: ["Сложен для восприятия", "Длительный хронометраж"]
    },
    {
      id: 3,
      title: "Джон Уик 4",
      director: "Чад Стахелски",
      year: 2023,
      genre: "Боевик",
      rating: 4,
      poster: "img/6a5cbe7c-b185-4fec-ab31-936ef2860c2d.jpg",
      description: "Финальная глава легендарного киллера",
      fullReview: "Зрелищный финал франшизы с невероятными боевыми сценами. Киану Ривз в лучшей форме.",
      pros: ["Хореография боев", "Кинематография", "Эмоциональная концовка"],
      cons: ["Предсказуемый сюжет", "Чрезмерная жестокость"]
    },
    {
      id: 4,
      title: "Бегущий по лезвию 2049",
      director: "Дени Вильнёв",
      year: 2017,
      genre: "Фантастика",
      rating: 5,
      poster: "img/6a5cbe7c-b185-4fec-ab31-936ef2860c2d.jpg",
      description: "Достойное продолжение культового фильма Ридли Скотта",
      fullReview: "Вильнёв справился с невозможным — создал сиквел, который не уступает оригиналу. Философский и визуально совершенный.",
      pros: ["Атмосфера оригинала", "Новые идеи", "Роджер Дикинс за камерой"],
      cons: ["Медленное развитие", "Требует знания оригинала"]
    },
    {
      id: 5,
      title: "Паразиты",
      director: "Пон Джун-хо",
      year: 2019,
      genre: "Триллер",
      rating: 5,
      poster: "img/6a5cbe7c-b185-4fec-ab31-936ef2860c2d.jpg",
      description: "Южнокорейский триллер о классовом неравенстве",
      fullReview: "Гениальный фильм, который работает на всех уровнях: как триллер, социальная драма и черная комедия.",
      pros: ["Многослойность", "Социальная актуальность", "Непредсказуемость"],
      cons: ["Жестокие сцены", "Специфический юмор"]
    },
    {
      id: 6,
      title: "Интерстеллар",
      director: "Кристофер Нолан",
      year: 2014,
      genre: "Фантастика",
      rating: 5,
      poster: "img/6a5cbe7c-b185-4fec-ab31-936ef2860c2d.jpg",
      description: "Космическая одиссея о поиске нового дома для человечества",
      fullReview: "Нолан соединил науку и эмоции в невероятно трогательную историю о любви, времени и выживании человечества.",
      pros: ["Научная точность", "Эмоциональная глубина", "Визуальные эффекты"],
      cons: ["Сложная наука", "Длительность"]
    }
  ];

  const genres = ["Все", "Боевик", "Драма", "Комедия", "Фантастика", "Ужасы", "Триллер"];

  const filteredMovies = movieReviews.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         movie.director.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === '' || selectedGenre === 'Все' || movie.genre === selectedGenre;
    
    return matchesSearch && matchesGenre;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon 
        key={i} 
        name="Star" 
        size={16} 
        className={i < rating ? "text-secondary fill-current" : "text-muted-foreground"}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bebas tracking-wider mb-6">
            ОБЗОРЫ <span className="text-primary">ФИЛЬМОВ</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Честные и подробные рецензии на фильмы, которые стоит посмотреть или пропустить
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-3 top-3 text-muted-foreground" />
              <Input
                placeholder="Поиск обзоров..."
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
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredMovies.map((movie) => (
              <Card key={movie.id} className="group hover:transform hover:scale-[1.02] transition-all duration-300 bg-card border-border">
                <div className="md:flex">
                  <div className="md:w-1/3 relative overflow-hidden">
                    <img
                      src={movie.poster}
                      alt={movie.title}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      {movie.genre}
                    </Badge>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-2xl font-bebas tracking-wide">{movie.title}</CardTitle>
                        <span className="text-secondary font-bold text-lg">{movie.year}</span>
                      </div>
                      <p className="text-muted-foreground">Режиссер: {movie.director}</p>
                      <div className="flex items-center gap-2 mt-2">
                        {renderStars(movie.rating)}
                        <span className="text-sm text-muted-foreground ml-2">{movie.rating}/5</span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-foreground/90 mb-4 leading-relaxed">{movie.fullReview}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="font-semibold text-green-400 mb-2 flex items-center">
                            <Icon name="ThumbsUp" size={16} className="mr-2" />
                            Плюсы:
                          </h4>
                          <ul className="space-y-1">
                            {movie.pros.map((pro, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-start">
                                <Icon name="Plus" size={12} className="text-green-400 mt-1 mr-2 flex-shrink-0" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-red-400 mb-2 flex items-center">
                            <Icon name="ThumbsDown" size={16} className="mr-2" />
                            Минусы:
                          </h4>
                          <ul className="space-y-1">
                            {movie.cons.map((con, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-start">
                                <Icon name="Minus" size={12} className="text-red-400 mt-1 mr-2 flex-shrink-0" />
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      {movie.link ? (
                        <Link to={movie.link}>
                          <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <Icon name="ExternalLink" size={16} className="mr-2" />
                            Читать полный обзор
                          </Button>
                        </Link>
                      ) : (
                        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Icon name="ExternalLink" size={16} className="mr-2" />
                          Читать полный обзор
                        </Button>
                      )}
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;