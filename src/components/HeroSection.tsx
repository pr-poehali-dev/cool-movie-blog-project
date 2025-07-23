import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('img/d37216bc-ab88-4ed8-9326-840d6a1550bb.jpg')`
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
        <div className="absolute top-40 right-1/3 w-1 h-1 bg-secondary/40 rounded-full animate-ping" />
        <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-primary/20 rounded-full animate-bounce" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-6">
          <Icon name="Film" size={64} className="text-primary mr-4" />
          <h1 className="text-7xl md:text-8xl font-bebas tracking-wider text-white drop-shadow-2xl">
            НА ПОВТОРЕ
          </h1>
        </div>
        <h2 className="text-2xl md:text-3xl font-bebas mb-12 tracking-wider text-primary drop-shadow-lg">
          🎬 БЛОГ О КИНО, КОТОРОЕ ХОЧЕТСЯ ПЕРЕСМАТРИВАТЬ
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105">
            <Icon name="Play" size={24} className="mr-3" />
            Смотреть трейлеры
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black shadow-2xl transition-all duration-300 transform hover:scale-105">
            <Icon name="BookOpen" size={24} className="mr-3" />
            Читать обзоры
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;