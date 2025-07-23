import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="relative border-b border-border bg-card/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img 
                src="img/ab693867-72c5-44b8-a639-53553515df48.jpg" 
                alt="НА ПОВТОРЕ" 
                className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bebas tracking-wider text-primary leading-none">НА ПОВТОРЕ</h1>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">КИНОБЛОГ</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-1">
            <a href="#" className="relative px-4 py-2 font-bebas text-lg tracking-wide text-foreground hover:text-primary transition-all duration-300 group">
              <span className="relative z-10">ГЛАВНАЯ</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#" className="relative px-4 py-2 font-bebas text-lg tracking-wide text-foreground hover:text-primary transition-all duration-300 group">
              <span className="relative z-10 flex items-center">
                <Icon name="Star" size={16} className="mr-2" />
                ОБЗОРЫ
              </span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#" className="relative px-4 py-2 font-bebas text-lg tracking-wide text-foreground hover:text-primary transition-all duration-300 group">
              <span className="relative z-10 flex items-center">
                <Icon name="Trophy" size={16} className="mr-2" />
                ТОПЫ
              </span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#" className="relative px-4 py-2 font-bebas text-lg tracking-wide text-foreground hover:text-primary transition-all duration-300 group">
              <span className="relative z-10 flex items-center">
                <Icon name="PlayCircle" size={16} className="mr-2" />
                ТРЕЙЛЕРЫ
              </span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#" className="relative px-4 py-2 font-bebas text-lg tracking-wide text-foreground hover:text-primary transition-all duration-300 group">
              <span className="relative z-10 flex items-center">
                <Icon name="FileText" size={16} className="mr-2" />
                СТАТЬИ
              </span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#" className="relative px-4 py-2 font-bebas text-lg tracking-wide text-foreground hover:text-primary transition-all duration-300 group">
              <span className="relative z-10 flex items-center">
                <Icon name="Mail" size={16} className="mr-2" />
                КОНТАКТЫ
              </span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors">
            <Icon name="Menu" size={24} className="text-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;