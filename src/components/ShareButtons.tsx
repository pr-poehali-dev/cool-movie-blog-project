import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ShareButtonsProps {
  url?: string;
  title: string;
  description?: string;
  className?: string;
}

const ShareButtons = ({ url, title, description = "", className = "" }: ShareButtonsProps) => {
  const shareUrl = url || window.location.href;
  const shareText = description || title;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert('Ссылка скопирована в буфер обмена!');
    } catch (err) {
      console.error('Ошибка копирования:', err);
      // Fallback для старых браузеров
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Ссылка скопирована в буфер обмена!');
    }
  };

  const shareToTelegram = () => {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title + (description ? ' - ' + description : ''))}`;
    window.open(telegramUrl, '_blank');
  };

  const shareToVK = () => {
    const vkUrl = `https://vk.com/share.php?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}&description=${encodeURIComponent(shareText)}`;
    window.open(vkUrl, '_blank');
  };

  const shareToWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(title + ' ' + shareUrl)}`;
    window.open(whatsappUrl, '_blank');
  };

  const shareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, '_blank');
  };

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <Button 
        variant="outline" 
        size="sm"
        className="flex items-center space-x-2 hover:bg-primary hover:text-primary-foreground transition-colors"
        onClick={copyToClipboard}
      >
        <Icon name="Copy" size={14} />
        <span>Копировать</span>
      </Button>
      
      <Button 
        variant="outline" 
        size="sm"
        className="flex items-center space-x-2 hover:bg-blue-500 hover:text-white transition-colors"
        onClick={shareToTelegram}
      >
        <Icon name="MessageCircle" size={14} />
        <span>Telegram</span>
      </Button>
      
      <Button 
        variant="outline" 
        size="sm"
        className="flex items-center space-x-2 hover:bg-blue-600 hover:text-white transition-colors"
        onClick={shareToVK}
      >
        <Icon name="Share2" size={14} />
        <span>VK</span>
      </Button>
      
      <Button 
        variant="outline" 
        size="sm"
        className="flex items-center space-x-2 hover:bg-green-500 hover:text-white transition-colors"
        onClick={shareToWhatsApp}
      >
        <Icon name="MessageSquare" size={14} />
        <span>WhatsApp</span>
      </Button>
      
      <Button 
        variant="outline" 
        size="sm"
        className="flex items-center space-x-2 hover:bg-sky-500 hover:text-white transition-colors"
        onClick={shareToTwitter}
      >
        <Icon name="Twitter" size={14} fallback="Share" />
        <span>Twitter</span>
      </Button>
    </div>
  );
};

export default ShareButtons;