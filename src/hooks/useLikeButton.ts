import { useState, useEffect } from 'react';

interface LikeButtonState {
  likes: number;
  isLiked: boolean;
  isAnimating: boolean;
}

export const useLikeButton = (initialLikes: number, articleId?: string) => {
  const [state, setState] = useState<LikeButtonState>({
    likes: initialLikes,
    isLiked: false,
    isAnimating: false
  });

  useEffect(() => {
    // Проверяем, был ли уже лайкнут этот контент
    const likeKey = `liked_${articleId || 'current'}`;
    const hasLiked = localStorage.getItem(likeKey);
    
    if (hasLiked === 'true') {
      setState(prev => ({
        ...prev,
        isLiked: true
      }));
    }
  }, [articleId]);

  // Эмуляция периодических лайков от других пользователей
  useEffect(() => {
    const interval = setInterval(() => {
      // Случайное увеличение лайков с вероятностью 15%
      if (Math.random() < 0.15) {
        setState(prev => ({
          ...prev,
          likes: prev.likes + Math.floor(Math.random() * 2) + 1
        }));
      }
    }, 15000 + Math.random() * 30000); // Каждые 15-45 секунд

    return () => clearInterval(interval);
  }, []);

  const toggleLike = () => {
    const likeKey = `liked_${articleId || 'current'}`;
    
    setState(prev => {
      const newIsLiked = !prev.isLiked;
      const newLikes = newIsLiked ? prev.likes + 1 : prev.likes - 1;
      
      // Сохраняем состояние в localStorage
      localStorage.setItem(likeKey, newIsLiked.toString());
      
      return {
        likes: newLikes,
        isLiked: newIsLiked,
        isAnimating: true
      };
    });

    // Убираем анимацию через небольшую задержку
    setTimeout(() => {
      setState(prev => ({
        ...prev,
        isAnimating: false
      }));
    }, 300);
  };

  const formatLikes = (likes: number): string => {
    if (likes >= 1000000) {
      return `${(likes / 1000000).toFixed(1)}M`;
    } else if (likes >= 1000) {
      return `${(likes / 1000).toFixed(1)}K`;
    }
    return likes.toString();
  };

  return {
    likes: state.likes,
    formattedLikes: formatLikes(state.likes),
    isLiked: state.isLiked,
    isAnimating: state.isAnimating,
    toggleLike
  };
};