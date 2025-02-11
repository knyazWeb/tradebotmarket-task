import { cn } from '@/utils';
import { IItemProps, INavigationProps } from './NavigationTypes';

const Navigation = ({ children, className }: INavigationProps) => {
  return <nav className={cn('flex w-full justify-between p-2 bg-lightOcean', className)}>{children}</nav>;
};

const Item = ({ itemName, iconRender, className, isActive = false }: IItemProps) => {
  return (
    <div className={cn('flex flex-col items-center justify-center gap-1', className)}>
      {iconRender(isActive)}
      <span className={cn('text-xs text-gray', isActive && 'text-white')}>
        {itemName}
      </span>
    </div>
  );
};

Navigation.Item = Item;

export { Navigation };
