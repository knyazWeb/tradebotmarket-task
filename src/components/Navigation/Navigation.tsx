import { cn } from '@/utils';
import { IItemProps, INavigationProps } from './NavigationTypes';

const Navigation = ({ children, className, ...props }: INavigationProps) => {
  return (
    <nav
      {...props}
      className={cn('bg-lightOcean flex w-full justify-between py-2 px-4', className)}
    >
      {children}
    </nav>
  );
};

const Item = ({
  itemName,
  iconRender,
  className,
  isActive = false,
  ...props
}: IItemProps) => {
  return (
    <div
      {...props}
      className={cn('flex flex-col items-center justify-center gap-1', className)}
    >
      {iconRender(isActive)}
      <span className={cn('text-xs text-gray', isActive && 'text-white')}>
        {itemName}
      </span>
    </div>
  );
};

Navigation.Item = Item;

export { Navigation };
