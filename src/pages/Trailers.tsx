import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Trailers = () => {
  const [selectedCategory, setSelectedCategory] = useState('new');

  const trailers = [
    {
      id: 1,
      title: "Дюна: Часть третья",
      category: "new",
      genre: "Фантастика",
      releaseDate: "2025-07-18",
      duration: "2:34",
      views: "2.1M",
      thumbnail: "img/6a5cbe7c-b185-4fec-ab31-936ef2860c2d.jpg",
      description: "Заключительная часть эпической саги Дени Вильнёва о Поле Атрейдесе",
      director: "Дени Вильнёв",
      cast: ["Тимоти Шаламе", "Зендая", "Ребекка Фергюсон"]
    },
    {
      id: 2,
      title: "Мстители: Секретные войны",
      category: "new",
      genre: "Боевик",
      releaseDate: "2025-05-01",
      duration: "3:12",
      views: "8.5M",
      thumbnail: "img/6a5cbe7c-b185-4fec-ab31-936ef2860c2d.jpg",
      description: "Эпический финал текущей фазы Marvel Cinematic Universe",
      director: "Братья Руссо",
      cast: ["Роберт Дауни мл.", "Крис Эванс", "Скарлетт Йоханссон"]
    },
    {
      id: 3,
      title: "Бегущий по лезвию 2099",
      category: "anticipated",
      genre: "Фантастика",
      releaseDate: "2025-10-06",
      duration: "2:48",
      views: "1.8M",
      thumbnail: "img/6a5cbe7c-b185-4fec-ab31-936ef2860c2d.jpg",
      description: "Продолжение культовой франшизы через 50 лет после событий предыдущего фильма",
      director: "Дени Вильнёв",
      cast: ["Райан Гослинг", "Ана де Армас", "Джаред Лето"]
    },
    {
      id: 4,
      title: "Джон Уик: Происхождение",
      category: "hot",
      genre: "Боевик",
      releaseDate: "2024-11-15",
      duration: "2:01",
      views: "3.7M",
      thumbnail: "img/6a5cbe7c-b185-4fec-ab31-936ef2860c2d.jpg",
      description: "Предыстория легендарного киллера до событий первого фильма",
      director: "Чад Стахелски",
      cast: ["Киану Ривз", "Лоуренс Фишберн", "Хэлли Берри"]
    },
    {
      id: 5,
      title: "Интерстеллар 2: Новые миры",
      category: "anticipated",
      genre: "Фантастика",
      releaseDate: "2025-12-20",
      duration: "2:56",
      views: "4.2M",
      thumbnail: "img/6a5cbe7c-b185-4fec-ab31-936ef2860c2d.jpg",
      description: "Продолжение космической одиссеи Кристофера Нолана",
      director: "Кристофер Нолан",
      cast: ["Мэттью МакКонахи", "Энн Хэтэуэй", "Джессика Честейн"]
    },
    {
      id: 6,
      title: "Матрица: Воскрешение",
      category: "hot",
      genre: "Фантастика",
      releaseDate: "2024-12-22",
      duration: "2:28",
      views: "5.1M",
      thumbnail: "img/6a5cbe7c-b185-4fec-ab31-936ef2860c2d.jpg",
      description: "Нео возвращается в новой реальности цифрового мира",
      director: "Лана Вачовски",
      cast: ["Киану Ривз", "Кэрри-Энн Мосс", "Яя Абдул-Матин II"]
    },
    {
      id: 7,
      title: "Гладиатор 3: Империя",
      category: "classic",
      genre: "Драма",
      releaseDate: "2025-03-15",
      duration: "3:05",
      views: "2.9M",
      thumbnail: "img/6a5cbe7c-b185-4fec-ab31-936ef2860c2d.jpg",
      description: "Продолжение эпической саги о римских воинах",
      director: "Ридли Скотт",
      cast: ["Пол Мескал", "Дензел Вашингтон", "Педро Паскаль"]
    },
    {
      id: 8,
      title: "Темный рыцарь: Наследие",
      category: "classic",
      genre: "Боевик",
      releaseDate: "2025-07-20",
      duration: "2:45",
      views: "6.8M",
      thumbnail: "img/6a5cbe7c-b185-4fec-ab31-936ef2860c2d.jpg",
      description: "Новая глава в истории Готэма после трилогии Нолана",
      director: "Мэтт Ривз",
      cast: ["Роберт Паттинсон", "Зои Кравиц", "Пол Дано"]
    }
  ];

  const categories = [
    { id: 'new', name: 'Новые', icon: 'Clock' },
    { id: 'hot', name: 'Популярные', icon: 'TrendingUp' },
    { id: 'anticipated', name: 'Ожидаемые', icon: 'Eye' },
    { id: 'classic', name: 'Классика', icon: 'Star' }
  ];

  const filteredTrailers = trailers.filter(trailer => trailer.category === selectedCategory);

  const formatViews = (views: string) => {
    return views.replace('M', ' млн').replace('K', ' тыс');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bebas tracking-wider mb-6">
            КОЛЛЕКЦИЯ <span className="text-primary">ТРЕЙЛЕРОВ</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Самые ожидаемые премьеры, популярные новинки и классические трейлеры в высоком качестве
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-bebas tracking-wide transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background hover:bg-primary/10 text-foreground hover:text-primary'
                }`}
              >
                <Icon name={category.icon as any} size={20} />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Trailers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTrailers.map((trailer) => (
              <Card key={trailer.id} className="group hover:transform hover:scale-105 transition-all duration-300 bg-card border-border overflow-hidden">
                <div className="relative">
                  <img
                    src={trailer.thumbnail}
                    alt={trailer.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon name="Play" size={24} className="text-primary-foreground ml-1" />
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <Badge className="absolute top-4 right-4 bg-black/70 text-white">
                    {trailer.duration}
                  </Badge>
                  
                  {/* Genre Badge */}
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {trailer.genre}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bebas tracking-wide line-clamp-2">
                    {trailer.title}
                  </CardTitle>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Выход: {new Date(trailer.releaseDate).toLocaleDateString('ru-RU')}</span>
                    <div className="flex items-center space-x-1">
                      <Icon name="Eye" size={14} />
                      <span>{formatViews(trailer.views)}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {trailer.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <Icon name="Camera" size={14} className="mr-2 text-primary" />
                      <span className="text-muted-foreground">Режиссер:</span>
                      <span className="ml-2">{trailer.director}</span>
                    </div>
                    <div className="flex items-start text-sm">
                      <Icon name="Users" size={14} className="mr-2 text-primary mt-0.5" />
                      <span className="text-muted-foreground">В ролях:</span>
                      <span className="ml-2 line-clamp-2">{trailer.cast.join(', ')}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Play" size={16} className="mr-2" />
                    Смотреть трейлер
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bebas tracking-wider text-center mb-12">
            САМЫЕ <span className="text-primary">ОБСУЖДАЕМЫЕ</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bebas text-primary mb-2">15M+</div>
              <p className="text-muted-foreground">Просмотров в месяц</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bebas text-secondary mb-2">500+</div>
              <p className="text-muted-foreground">Трейлеров в коллекции</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bebas text-primary mb-2">4K</div>
              <p className="text-muted-foreground">Качество видео</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Trailers;