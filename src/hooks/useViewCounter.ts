import { useState, useEffect } from 'react';

interface ViewCounterState {
  views: number;
  isIncrementing: boolean;
}

export const useViewCounter = (initialViews: number, articleId?: string) => {
  const [state, setState] = useState<ViewCounterState>({
    views: initialViews || 0,
    isIncrementing: false
  });

  useEffect(() => {
    // Проверяем, была ли уже просмотрена эта статья в этой сессии
    const viewedKey = `viewed_${articleId || 'current'}`;
    const hasViewed = sessionStorage.getItem(viewedKey);

    if (!hasViewed) {
      // Увеличиваем счетчик через небольшую задержку (имитация загрузки)
      const timer = setTimeout(() => {
        setState(prev => ({
          ...prev,
          isIncrementing: true
        }));

        // Плавное увеличение просмотров
        const incrementTimer = setTimeout(() => {
          setState(prev => ({
            views: prev.views + 1,
            isIncrementing: false
          }));
          
          // Сохраняем в sessionStorage, что статья была просмотрена
          sessionStorage.setItem(viewedKey, 'true');
        }, 300);

        return () => clearTimeout(incrementTimer);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [articleId]);

  // Эмуляция периодических обновлений просмотров от других пользователей
  useEffect(() => {
    const interval = setInterval(() => {
      // Случайное увеличение с вероятностью 20%
      if (Math.random() < 0.2) {
        setState(prev => ({
          ...prev,
          views: prev.views + Math.floor(Math.random() * 3) + 1
        }));
      }
    }, 10000 + Math.random() * 20000); // Каждые 10-30 секунд

    return () => clearInterval(interval);
  }, []);

  const formatViews = (views: number): string => {
    const numViews = typeof views === 'number' ? views : 0;
    if (numViews >= 1000000) {
      return `${(numViews / 1000000).toFixed(1)}M`;
    } else if (numViews >= 1000) {
      return `${(numViews / 1000).toFixed(1)}K`;
    }
    return numViews.toString();
  };

  return {
    views: state.views,
    formattedViews: formatViews(state.views),
    isIncrementing: state.isIncrementing
  };
};