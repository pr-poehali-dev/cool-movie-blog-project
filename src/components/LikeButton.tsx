import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useLikeButton } from '@/hooks/useLikeButton';

interface LikeButtonProps {
  initialLikes: number;
  articleId?: string;
  variant?: 'default' | 'large';
  className?: string;
}

const LikeButton = ({ 
  initialLikes, 
  articleId, 
  variant = 'default',
  className = '' 
}: LikeButtonProps) => {
  const { likes, formattedLikes, isLiked, isAnimating, toggleLike } = useLikeButton(initialLikes, articleId);

  const isLarge = variant === 'large';

  return (
    <Button
      variant={isLiked ? 'default' : 'outline'}
      className={`group transition-all duration-300 ${
        isLiked 
          ? 'bg-red-500 hover:bg-red-600 text-white border-red-500' 
          : 'hover:bg-red-50 hover:border-red-200 hover:text-red-600'
      } ${isAnimating ? 'scale-110' : ''} ${className}`}
      onClick={toggleLike}
      size={isLarge ? 'lg' : 'default'}
    >
      <Icon 
        name="Heart" 
        size={isLarge ? 20 : 16} 
        className={`mr-2 transition-all duration-300 ${
          isLiked 
            ? 'fill-current text-white' 
            : 'group-hover:fill-current group-hover:text-red-500'
        } ${isAnimating ? 'animate-pulse' : ''}`}
      />
      <span className={`font-medium ${isLarge ? 'text-lg' : ''}`}>
        {isLiked ? 'Нравится' : 'Мне нравится'} ({formattedLikes})
      </span>
    </Button>
  );
};

export default LikeButton;