import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bebas tracking-wider text-center mb-8">
            ДОБРО ПОЖАЛОВАТЬ В КИНОБЛОГ <span className="text-primary">«НА ПОВТОРЕ»</span>
          </h2>
          
          <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed space-y-8">
            <p className="text-xl text-center text-muted-foreground mb-12">
              Добро пожаловать в киноблог «На повторе» — место для тех, кто любит кино не по рейтингу, 
              а по отклику внутри. Мы говорим о фильмах, которые оставляют след — будь то забытые триллеры 90-х, 
              фестивальные драмы, неочевидные новинки или просто те ленты, к которым хочется вернуться.
            </p>

            <div className="bg-card p-8 rounded-lg border border-border">
              <p className="text-lg leading-relaxed">
                Здесь нет гонки за хайпом — только честные обзоры, глубокие разборы, авторские подборки 
                и ностальгические вспышки, когда слышишь знакомый щелчок кассеты или открывающий кадр любимого фильма.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="p-6 bg-card border-border">
                <h3 className="text-2xl font-bebas tracking-wide text-primary mb-4 flex items-center">
                  <Icon name="Film" size={28} className="mr-3" />
                  📽 ЧТО ВЫ НАЙДЁТЕ В БЛОГЕ:
                </h3>
                <ul className="space-y-3 text-foreground/90">
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={16} className="text-primary mt-1 mr-3 flex-shrink-0" />
                    Редкие и недооценённые фильмы 90-х, которые вы могли пропустить
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={16} className="text-primary mt-1 mr-3 flex-shrink-0" />
                    Обзоры новых фильмов — без спойлеров, но с мнением
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={16} className="text-primary mt-1 mr-3 flex-shrink-0" />
                    Топы и подборки по жанрам: триллеры, драмы, sci-fi, артхаус
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={16} className="text-primary mt-1 mr-3 flex-shrink-0" />
                    Анализ сцен, персонажей и сценариев
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={16} className="text-primary mt-1 mr-3 flex-shrink-0" />
                    Истории кино, режиссёров и культурных контекстов
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={16} className="text-primary mt-1 mr-3 flex-shrink-0" />
                    Рекомендации по стримингам и где смотреть
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-card border-border">
                <h3 className="text-2xl font-bebas tracking-wide text-secondary mb-4 flex items-center">
                  <Icon name="Users" size={28} className="mr-3" />
                  🔍 ДЛЯ КОГО ЭТОТ БЛОГ:
                </h3>
                <ul className="space-y-3 text-foreground/90">
                  <li className="flex items-start">
                    <Icon name="Heart" size={16} className="text-secondary mt-1 mr-3 flex-shrink-0" />
                    Для тех, кто ищет фильмы со смыслом, не только с экшеном
                  </li>
                  <li className="flex items-start">
                    <Icon name="Heart" size={16} className="text-secondary mt-1 mr-3 flex-shrink-0" />
                    Для зрителей, которым важна атмосфера, режиссура и сценарий
                  </li>
                  <li className="flex items-start">
                    <Icon name="Heart" size={16} className="text-secondary mt-1 mr-3 flex-shrink-0" />
                    Для фанатов авторского, фестивального и классического кино
                  </li>
                  <li className="flex items-start">
                    <Icon name="Heart" size={16} className="text-secondary mt-1 mr-3 flex-shrink-0" />
                    Для тех, кто хочет знать, что посмотреть вечером, кроме очередного блокбастера
                  </li>
                </ul>
              </Card>
            </div>

            <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
              <h3 className="text-3xl font-bebas tracking-wide text-primary mb-4">
                🧠 ПОЧЕМУ «НА ПОВТОРЕ»?
              </h3>
              <p className="text-lg leading-relaxed text-foreground/90 max-w-3xl mx-auto">
                Потому что хорошие фильмы не стареют. Их хочется пересматривать, переосмыслять и обсуждать. 
                Мы верим, что кино — это не просто развлечение, а зеркало времени, эмоций и идей.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="text-center">
                <h3 className="text-2xl font-bebas tracking-wide text-primary mb-6 flex items-center justify-center">
                  <Icon name="Target" size={28} className="mr-3" />
                  🎯 МЫ ПИШЕМ ПРО:
                </h3>
                <div className="space-y-2 text-foreground/90">
                  <p>• Фильмы 90-х, 2000-х и наших дней</p>
                  <p>• Триллеры, драмы, нуар, sci-fi, хоррор, arthouse</p>
                  <p>• Фильмы для одного вечера и для всей жизни</p>
                  <p className="text-primary font-semibold">• А главное — про кино, которое не отпускает</p>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bebas tracking-wide text-secondary mb-6">
                  НА ПОВТОРЕ
                </h3>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Подписывайтесь, читайте, спорьте, делитесь — и, если захотите, пересматривайте.
                </p>
                <p className="text-primary font-semibold mt-4">
                  Потому что хорошее кино не забывается.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;