import { cn } from '@/utils';
import { IHeaderProps, ITitleProps } from './HeaderTypes';

const Header = ({ children, className, ...props }: IHeaderProps) => {
  return (
    <header
      {...props}
      className={cn('flex items-center justify-between px-2 py-7', className)}
    >
      {children}
    </header>
  );
};

const Item = ({ children, className }: ITitleProps) => {
  return <div className={cn('text-center text-xl font-bold', className)}>{children}</div>;
};

Header.Item = Item;

export { Header };
