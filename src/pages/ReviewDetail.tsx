import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const ReviewDetail = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Breadcrumb */}
      <section className="py-6 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
            <Icon name="ChevronRight" size={16} />
            <Link to="/reviews" className="hover:text-primary transition-colors">Обзоры</Link>
            <Icon name="ChevronRight" size={16} />
            <span>Фантастическая четверка: Первые шаги</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Badge className="bg-primary text-primary-foreground mb-4">Рецензия</Badge>
              <h1 className="text-4xl md:text-5xl font-bebas tracking-wide leading-tight mb-6">
                Рецензия на фильм «Фантастическая четверка: Первые шаги» — новый взгляд на классических героев
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Узнайте, как фильм «Фантастическая четверка: Первые шаги» сочетает семейную драму и эпичные сражения с Галактусом. Рецензия, актерский состав, визуальные эффекты и будущее киновселенной Marvel.
              </p>
            </div>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-12">
              <div className="flex items-center space-x-2">
                <Icon name="User" size={16} />
                <span>Редакция</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Calendar" size={16} />
                <span>{new Date().toLocaleDateString('ru-RU')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>8 мин чтения</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Eye" size={16} />
                <span>2.1K просмотров</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="mb-12">
              <img
                src="https://cdn.poehali.dev/files/41bb1792-8a9c-49b4-abbd-942daa7ce881.jpg"
                alt="Фантастическая четверка: Первые шаги"
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground text-center mt-4">
                Постер фильма «Фантастическая четверка: Первые шаги»
              </p>
            </div>

            {/* Article Text */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Недавно посмотрел фильм «Фантастическая четвёрка: Первые шаги», и хочу поделиться своими впечатлениями. Сразу скажу, что этот перезапуск известной супергеройской команды — вещь неоднозначная, и к нему стоит подходить с открытым умом.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Главное, что меня удивило — это атмосфера 1960-х годов, в которую погружается зритель. Вместо привычного современного сеттинга режиссёр Мэтт Шекман выбрал ретрофутуристический стиль, и мне показалось это смелым решением. Фильм будто переносит нас в альтернативную реальность, где космические технологии сочетаются с духом тех лет.
              </p>

              <h2 className="text-2xl font-bebas tracking-wide mt-12 mb-6">Сюжет и персонажи</h2>

              <p className="text-lg leading-relaxed mb-6">
                По сюжету здесь уже не столько история происхождения героев, сколько рассказ о том, как они учатся работать вместе и справляться с надвигающейся космической угрозой — самим Галактусом. Мне понравилось, что в фильме делают акцент на семейных отношениях: Рид Ричардс и Сью Шторм ожидают ребёнка, что добавляет драматизма и человечности в их образы. Эта линия, на мой взгляд, делает персонажей более живыми и понятными.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Что касается актёров, то Педро Паскаль в роли Рида меня приятно удивил — он показался убедительным и харизматичным. Ванесса Кирби в роли Сью тоже хорошо сыграла, особенно в эмоциональных сценах. Остальные члены команды — Джонни и Бен — добавляют фильму юмора и энергии, что тоже здорово разбавляет серьёзность.
              </p>

              {/* Rating Card */}
              <Card className="my-12 bg-card border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bebas tracking-wide mb-6">Наша оценка</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span>Сюжет</span>
                        <div className="flex items-center space-x-1">
                          {[1, 2, 3, 4].map((star) => (
                            <Icon key={star} name="Star" size={16} className="text-secondary fill-current" />
                          ))}
                          <Icon name="Star" size={16} className="text-muted-foreground" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <span>Актёрская игра</span>
                        <div className="flex items-center space-x-1">
                          {[1, 2, 3, 4].map((star) => (
                            <Icon key={star} name="Star" size={16} className="text-secondary fill-current" />
                          ))}
                          <Icon name="Star" size={16} className="text-muted-foreground" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Режиссура</span>
                        <div className="flex items-center space-x-1">
                          {[1, 2, 3, 4].map((star) => (
                            <Icon key={star} name="Star" size={16} className="text-secondary fill-current" />
                          ))}
                          <Icon name="Star" size={16} className="text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span>Визуальные эффекты</span>
                        <div className="flex items-center space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Icon key={star} name="Star" size={16} className="text-secondary fill-current" />
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <span>Музыка</span>
                        <div className="flex items-center space-x-1">
                          {[1, 2, 3, 4].map((star) => (
                            <Icon key={star} name="Star" size={16} className="text-secondary fill-current" />
                          ))}
                          <Icon name="Star" size={16} className="text-muted-foreground" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold">Общая оценка</span>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            {[1, 2, 3, 4].map((star) => (
                              <Icon key={star} name="Star" size={18} className="text-secondary fill-current" />
                            ))}
                            <Icon name="Star" size={18} className="text-muted-foreground" />
                          </div>
                          <span className="text-xl font-bold text-secondary">4/5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-bebas tracking-wide mt-12 mb-6">Визуальная составляющая</h2>

              <p className="text-lg leading-relaxed mb-6">
                Визуально фильм сделан отлично — спецэффекты красивые и масштабные, особенно битвы с Галактусом и Серебряным Серфером. Правда, CGI персонаж Существо местами выглядел немного неуклюже, а синхронизация губ казалась неидеальной, но в целом это не портит впечатление.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Фильм заканчивается намёком на появление Доктора Дума, что интригует и даёт надежду на развитие серии. Мне кажется, у создателей есть хорошие идеи для будущих частей.
              </p>

              <h2 className="text-2xl font-bebas tracking-wide mt-12 mb-6">Итоговые впечатления</h2>

              <p className="text-lg leading-relaxed mb-6">
                В целом, «Фантастическая четвёрка: Первые шаги» — это не просто супергеройский блокбастер, а история о семье, ответственности и взрослении на фоне космических событий. Возможно, не всё получилось идеально, но фильм однозначно стоит посмотреть фанатам Marvel и любителям необычного кинематографа.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12">
                <Badge variant="outline">Marvel</Badge>
                <Badge variant="outline">Фантастическая четверка</Badge>
                <Badge variant="outline">Супергерои</Badge>
                <Badge variant="outline">Галактус</Badge>
                <Badge variant="outline">Педро Паскаль</Badge>
                <Badge variant="outline">Ретрофутуризм</Badge>
              </div>
            </div>

            {/* Share Section */}
            <Card className="mt-12 bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bebas tracking-wide mb-6">Поделиться статьей</h3>
                <div className="flex items-center space-x-4">
                  <Button variant="outline" className="flex items-center space-x-2">
                    <Icon name="Share" size={16} />
                    <span>Копировать ссылку</span>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2">
                    <Icon name="MessageCircle" size={16} />
                    <span>Telegram</span>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2">
                    <Icon name="Share2" size={16} />
                    <span>VK</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
              <Link to="/reviews" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                <Icon name="ArrowLeft" size={16} />
                <span>Вернуться к обзорам</span>
              </Link>
              <Button className="bg-primary hover:bg-primary/90">
                <Icon name="BookOpen" size={16} className="mr-2" />
                Читать еще
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReviewDetail;