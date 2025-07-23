import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import ShareButtons from '@/components/ShareButtons';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Articles = () => {
  const [selectedCategory, setSelectedCategory] = useState('analysis');

  const articles = [
    {
      id: 1,
      title: "Эволюция кинематографа: От немого кино до виртуальной реальности",
      category: "analysis",
      author: "Алексей Петров",
      readTime: "12 мин",
      publishDate: "2024-07-20",
      image: "img/6a5cbe7c-b185-4fec-ab31-936ef2860c2d.jpg",
      excerpt: "Исследование того, как технологии изменили способы рассказывания историй в кино за последние 130 лет.",
      tags: ["История кино", "Технологии", "Анализ"],
      views: "8.2K"
    },
    {
      id: 2,
      title: "Психология цвета в фильмах Кристофера Нолана",
      category: "analysis",
      author: "Мария Смирнова",
      readTime: "8 мин",
      publishDate: "2024-07-18",
      image: "img/6a5cbe7c-b185-4fec-ab31-936ef2860c2d.jpg",
      excerpt: "Как режиссер использует цветовую палитру для создания атмосферы и передачи эмоций в своих работах.",
      tags: ["Нолан", "Психология", "Визуальный стиль"],
      views: "12.1K"
    },
    {
      id: 3,
      title: "Влияние южнокорейского кино на мировой кинематограф",
      category: "industry",
      author: "Игорь Волков",
      readTime: "15 мин",
      publishDate: "2024-07-15",
      image: "img/6a5cbe7c-b185-4fec-ab31-936ef2860c2d.jpg",
      excerpt: "От 'Паразитов' до 'Игры в кальмара': как корейские фильмы изменили индустрию развлечений.",
      tags: ["Корейское кино", "Индустрия", "Глобализация"],
      views: "15.7K"
    },
    {
      id: 4,
      title: "Музыка в кино: Как саундтрек создает эмоции",
      category: "craft",
      author: "Елена Козлова",
      readTime: "10 мин",
      publishDate: "2024-07-12",
      image: "img/6a5cbe7c-b185-4fec-ab31-936ef2860c2d.jpg",
      excerpt: "Анализ роли музыкального сопровождения в создании атмосферы и эмоционального воздействия фильма.",
      tags: ["Музыка", "Саундтрек", "Эмоции"],
      views: "9.8K"
    },
    {
      id: 5,
      title: "Будущее кинотеатров в эпоху стриминга",
      category: "industry",
      author: "Дмитрий Соколов",
      readTime: "7 мин",
      publishDate: "2024-07-10",
      image: "img/6a5cbe7c-b185-4fec-ab31-936ef2860c2d.jpg",
      excerpt: "Как пандемия изменила кинопоказ и что ждет традиционные кинотеатры в будущем.",
      tags: ["Стриминг", "Кинотеатры", "Будущее"],
      views: "6.4K"
    },
    {
      id: 6,
      title: "Искусство операторской работы: Секреты визуального повествования",
      category: "craft",
      author: "Сергей Белов",
      readTime: "14 мин",
      publishDate: "2024-07-08",
      image: "img/6a5cbe7c-b185-4fec-ab31-936ef2860c2d.jpg",
      excerpt: "Разбор техник кинематографии, которые помогают рассказывать историю через визуальный язык.",
      tags: ["Операторское искусство", "Визуал", "Техника"],
      views: "11.3K"
    },
    {
      id: 7,
      title: "Женщины в кинематографе: Борьба за равенство за кадром",
      category: "industry",
      author: "Анна Морозова",
      readTime: "11 мин",
      publishDate: "2024-07-05",
      image: "img/6a5cbe7c-b185-4fec-ab31-936ef2860c2d.jpg",
      excerpt: "Исследование роли женщин в киноиндустрии и изменений, произошедших за последние десятилетия.",
      tags: ["Гендер", "Равенство", "Индустрия"],
      views: "7.9K"
    },
    {
      id: 8,
      title: "Философия в кино: Экзистенциальные вопросы в современных фильмах",
      category: "analysis",
      author: "Владимир Лебедев",
      readTime: "16 мин",
      publishDate: "2024-07-02",
      image: "img/6a5cbe7c-b185-4fec-ab31-936ef2860c2d.jpg",
      excerpt: "Как современные режиссеры исследуют философские темы через кинематографический язык.",
      tags: ["Философия", "Экзистенциализм", "Смысл"],
      views: "13.6K"
    }
  ];

  const categories = [
    { id: 'analysis', name: 'Анализ', icon: 'Search' },
    { id: 'industry', name: 'Индустрия', icon: 'Building' },
    { id: 'craft', name: 'Мастерство', icon: 'Palette' },
    { id: 'history', name: 'История', icon: 'Clock' }
  ];

  const filteredArticles = articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-secondary/10 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bebas tracking-wider mb-6">
            СТАТЬИ О <span className="text-primary">КИНЕМАТОГРАФЕ</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Глубокие размышления о кино, анализ трендов индустрии и секреты мастерства кинематографистов
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

      {/* Featured Article */}
      {filteredArticles.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Card className="overflow-hidden bg-card border-border">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={filteredArticles[0].image}
                    alt={filteredArticles[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <Badge className="bg-primary text-primary-foreground">Рекомендуем</Badge>
                    <Badge variant="outline">{filteredArticles[0].category}</Badge>
                  </div>
                  <h2 className="text-3xl font-bebas tracking-wide mb-4 leading-tight">
                    {filteredArticles[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {filteredArticles[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Icon name="User" size={14} />
                        <span>{filteredArticles[0].author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Clock" size={14} />
                        <span>{filteredArticles[0].readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Eye" size={14} />
                        <span>{filteredArticles[0].views}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    <Icon name="BookOpen" size={16} className="mr-2" />
                    Читать статью
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.slice(1).map((article) => (
              <Card key={article.id} className="group hover:transform hover:scale-105 transition-all duration-300 bg-card border-border overflow-hidden">
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {article.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} className="bg-primary/80 text-primary-foreground text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bebas tracking-wide line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{new Date(article.publishDate).toLocaleDateString('ru-RU')}</span>
                    <div className="flex items-center space-x-1">
                      <Icon name="Eye" size={14} />
                      <span>{article.views}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Icon name="User" size={14} />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Icon name="Clock" size={14} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon name="BookOpen" size={16} className="mr-2" />
                      Читать полностью
                    </Button>
                    
                    <div className="pt-3 border-t border-border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Поделиться:</span>
                      </div>
                      <ShareButtons 
                        title={article.title}
                        description={article.excerpt}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bebas tracking-wider mb-6">
            НЕ ПРОПУСКАЙТЕ <span className="text-primary">НОВЫЕ СТАТЬИ</span>
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Подписывайтесь на рассылку и получайте самые интересные материалы о кино прямо на почту
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="bg-primary hover:bg-primary/90">
              Подписаться
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Articles;