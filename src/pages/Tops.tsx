import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Tops = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const topLists = [
    {
      id: 1,
      title: "Топ-10 лучших фильмов 2024 года",
      category: "year",
      icon: "Calendar",
      description: "Лучшие кинопремьеры уходящего года",
      movies: [
        { title: "Дюна: Часть вторая", rating: 9.2, genre: "Фантастика" },
        { title: "Опенгеймер", rating: 9.0, genre: "Драма" },
        { title: "Джон Уик 4", rating: 8.8, genre: "Боевик" },
        { title: "Человек-паук: Через вселенные", rating: 8.7, genre: "Анимация" },
        { title: "Миссия невыполнима 7", rating: 8.5, genre: "Боевик" },
        { title: "Гардианы Галактики 3", rating: 8.4, genre: "Фантастика" },
        { title: "Индиана Джонс 5", rating: 8.2, genre: "Приключения" },
        { title: "Трансформеры: Восхождение звери", rating: 8.0, genre: "Фантастика" },
        { title: "Форсаж 10", rating: 7.8, genre: "Боевик" },
        { title: "Мэл Гибсон: Ярость", rating: 7.6, genre: "Драма" }
      ]
    },
    {
      id: 2,
      title: "Лучшие триллеры всех времен",
      category: "genre",
      icon: "Zap",
      description: "Фильмы, которые держат в напряжении до последней секунды",
      movies: [
        { title: "Молчание ягнят", rating: 9.5, genre: "Триллер" },
        { title: "Психо", rating: 9.4, genre: "Триллер" },
        { title: "Семь", rating: 9.3, genre: "Триллер" },
        { title: "Остров проклятых", rating: 9.2, genre: "Триллер" },
        { title: "Зодиак", rating: 9.1, genre: "Триллер" },
        { title: "Нет страны для стариков", rating: 9.0, genre: "Триллер" },
        { title: "Мыс страха", rating: 8.9, genre: "Триллер" },
        { title: "Телохранитель", rating: 8.8, genre: "Триллер" },
        { title: "Исчезнувшая", rating: 8.7, genre: "Триллер" },
        { title: "Шестое чувство", rating: 8.6, genre: "Триллер" }
      ]
    },
    {
      id: 3,
      title: "Недооцененные шедевры 90-х",
      category: "decade",
      icon: "Star",
      description: "Фильмы, которые не получили должного признания при выходе",
      movies: [
        { title: "Бегущий по лезвию 2049", rating: 9.1, genre: "Фантастика" },
        { title: "Матрица", rating: 9.0, genre: "Фантастика" },
        { title: "Добро пожаловать в Долли-вуд", rating: 8.9, genre: "Комедия" },
        { title: "Титаник", rating: 8.8, genre: "Драма" },
        { title: "Криминальное чтиво", rating: 8.7, genre: "Драма" },
        { title: "Форрест Гамп", rating: 8.6, genre: "Драма" },
        { title: "Молчание ягнят", rating: 8.5, genre: "Триллер" },
        { title: "Список Шиндлера", rating: 8.4, genre: "Драма" },
        { title: "Побег из Шоушенка", rating: 8.3, genre: "Драма" },
        { title: "Король Лев", rating: 8.2, genre: "Анимация" }
      ]
    },
    {
      id: 4,
      title: "Лучшие режиссеры современности",
      category: "director",
      icon: "Camera",
      description: "Мастера кинематографа, определяющие лицо современного кино",
      movies: [
        { title: "Кристофер Нолан", rating: 9.4, genre: "Интерстеллар, Темный рыцарь" },
        { title: "Дени Вильнёв", rating: 9.3, genre: "Дюна, Прибытие" },
        { title: "Мартин Скорсезе", rating: 9.2, genre: "Волк с Уолл-стрит" },
        { title: "Квентин Тарантино", rating: 9.1, genre: "Джанго освобожденный" },
        { title: "Дэвид Финчер", rating: 9.0, genre: "Бойцовский клуб" },
        { title: "Ридли Скотт", rating: 8.9, genre: "Гладиатор" },
        { title: "Стивен Спилберг", rating: 8.8, genre: "Список Шиндлера" },
        { title: "Братья Коэн", rating: 8.7, genre: "Большой Лебовски" },
        { title: "Пол Томас Андерсон", rating: 8.6, genre: "Нефть" },
        { title: "Алехандро Гонсалес Иньярриту", rating: 8.5, genre: "Выживший" }
      ]
    },
    {
      id: 5,
      title: "Фильмы для повторного просмотра",
      category: "rewatch",
      icon: "RotateCcw",
      description: "Кино, которое раскрывается с новой стороны при каждом просмотре",
      movies: [
        { title: "Начало", rating: 9.3, genre: "Фантастика" },
        { title: "Престиж", rating: 9.2, genre: "Триллер" },
        { title: "Шестое чувство", rating: 9.1, genre: "Триллер" },
        { title: "Бойцовский клуб", rating: 9.0, genre: "Драма" },
        { title: "Обычные подозреваемые", rating: 8.9, genre: "Триллер" },
        { title: "Матрица", rating: 8.8, genre: "Фантастика" },
        { title: "Мементо", rating: 8.7, genre: "Триллер" },
        { title: "Остров проклятых", rating: 8.6, genre: "Триллер" },
        { title: "Интерстеллар", rating: 8.5, genre: "Фантастика" },
        { title: "2001: Космическая одиссея", rating: 8.4, genre: "Фантастика" }
      ]
    },
    {
      id: 6,
      title: "Лучшие зарубежные фильмы",
      category: "foreign",
      icon: "Globe",
      description: "Шедевры мирового кинематографа",
      movies: [
        { title: "Паразиты", rating: 9.4, genre: "Триллер (Корея)" },
        { title: "Семь самураев", rating: 9.3, genre: "Драма (Япония)" },
        { title: "Амели", rating: 9.2, genre: "Комедия (Франция)" },
        { title: "Город Бога", rating: 9.1, genre: "Драма (Бразилия)" },
        { title: "Жизнь прекрасна", rating: 9.0, genre: "Драма (Италия)" },
        { title: "Олдбой", rating: 8.9, genre: "Триллер (Корея)" },
        { title: "Интуиха", rating: 8.8, genre: "Драма (Испания)" },
        { title: "Спирали", rating: 8.7, genre: "Триллер (Япония)" },
        { title: "Жизнь других", rating: 8.6, genre: "Драма (Германия)" },
        { title: "Тайна в их глазах", rating: 8.5, genre: "Триллер (Аргентина)" }
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'Все топы', icon: 'List' },
    { id: 'year', name: 'По годам', icon: 'Calendar' },
    { id: 'genre', name: 'По жанрам', icon: 'Film' },
    { id: 'decade', name: 'По десятилетиям', icon: 'History' },
    { id: 'director', name: 'Режиссеры', icon: 'Camera' },
    { id: 'rewatch', name: 'Для повтора', icon: 'RotateCcw' },
    { id: 'foreign', name: 'Зарубежные', icon: 'Globe' }
  ];

  const filteredTopLists = selectedCategory === 'all' 
    ? topLists 
    : topLists.filter(list => list.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-secondary/10 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bebas tracking-wider mb-6">
            ТОПЫ И <span className="text-primary">РЕЙТИНГИ</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Лучшие фильмы по жанрам, годам и режиссерам. Составлено киноманами для киноманов
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

      {/* Top Lists */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredTopLists.map((topList) => (
              <Card key={topList.id} className="bg-card border-border hover:transform hover:scale-[1.02] transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Icon name={topList.icon as any} size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bebas tracking-wide">{topList.title}</CardTitle>
                      <p className="text-muted-foreground">{topList.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {topList.movies.map((movie, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-background/50 rounded-lg hover:bg-background transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full text-primary-foreground font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="font-semibold">{movie.title}</h4>
                            <p className="text-sm text-muted-foreground">{movie.genre}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Star" size={16} className="text-secondary fill-current" />
                          <span className="font-bold text-secondary">{movie.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <button className="px-6 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-bebas tracking-wide">
                      СМОТРЕТЬ ПОЛНЫЙ ТОП
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bebas tracking-wider text-center mb-12">
            СТАТИСТИКА <span className="text-primary">РЕЙТИНГОВ</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bebas text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Фильмов в рейтингах</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bebas text-secondary mb-2">50+</div>
              <p className="text-muted-foreground">Тематических топов</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bebas text-primary mb-2">20+</div>
              <p className="text-muted-foreground">Категорий</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bebas text-secondary mb-2">100%</div>
              <p className="text-muted-foreground">Субъективности</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tops;