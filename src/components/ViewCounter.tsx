import Icon from '@/components/ui/icon';
import { useViewCounter } from '@/hooks/useViewCounter';

interface ViewCounterProps {
  initialViews: number;
  itemId?: string;
  className?: string;
}

const ViewCounter = ({ initialViews, itemId, className = '' }: ViewCounterProps) => {
  const { formattedViews, isIncrementing } = useViewCounter(initialViews, itemId);

  return (
    <div className={`flex items-center space-x-1 text-sm text-muted-foreground ${className}`}>
      <Icon name="Eye" size={14} />
      <span className={`transition-all duration-300 ${isIncrementing ? 'text-primary scale-105' : ''}`}>
        {formattedViews}
      </span>
    </div>
  );
};

export default ViewCounter;