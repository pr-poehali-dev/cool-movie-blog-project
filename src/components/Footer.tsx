import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="relative">
              <img 
                src="img/ab693867-72c5-44b8-a639-53553515df48.jpg" 
                alt="НА ПОВТОРЕ" 
                className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20" />
            </div>
            <div className="text-left">
              <h4 className="text-4xl font-bebas tracking-wider text-primary leading-none">НА ПОВТОРЕ</h4>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">КИНОБЛОГ</span>
            </div>
          </div>
          
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Блог о кино, которое хочется пересматривать. Потому что хорошее кино не забывается.
          </p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a href="#" className="group flex flex-col items-center">
              <Icon name="Instagram" size={28} className="text-muted-foreground group-hover:text-primary transition-colors mb-2" />
              <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">Instagram</span>
            </a>
            <a href="#" className="group flex flex-col items-center">
              <Icon name="Twitter" size={28} className="text-muted-foreground group-hover:text-primary transition-colors mb-2" />
              <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">Twitter</span>
            </a>
            <a href="#" className="group flex flex-col items-center">
              <Icon name="Youtube" size={28} className="text-muted-foreground group-hover:text-primary transition-colors mb-2" />
              <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">YouTube</span>
            </a>
            <a href="#" className="group flex flex-col items-center">
              <Icon name="Mail" size={28} className="text-muted-foreground group-hover:text-primary transition-colors mb-2" />
              <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">Контакты</span>
            </a>
          </div>
          
          <div className="border-t border-border pt-6">
            <p className="text-sm text-muted-foreground">
              © 2024 НА ПОВТОРЕ. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;