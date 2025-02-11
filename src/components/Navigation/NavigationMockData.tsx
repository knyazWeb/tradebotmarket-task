import { cn } from '@/utils';
import {
  ChartNoAxesCombined,
  CircleDollarSign,
  LayoutList,
  Settings,
  ShoppingCart,
} from 'lucide-react';

export const navigationMockData = [
  {
    itemName: 'Dashboard',
    iconRender: (isActive: boolean) => (
      <LayoutList className={cn('h-6 w-6 text-gray', isActive && 'text-white')} />
    ),
    isActive: true,
  },
  {
    itemName: 'Megabot',
    iconRender: (isActive: boolean) => (
      <ChartNoAxesCombined
        className={cn('h-6 w-6 text-gray', isActive && 'text-white')}
      />
    ),
  },
  {
    itemName: 'Bot market',
    iconRender: (isActive: boolean) => (
      <ShoppingCart className={cn('h-6 w-6 text-gray', isActive && 'text-white')} />
    ),
  },
  {
    itemName: 'Coin Prices',
    iconRender: (isActive: boolean) => (
      <CircleDollarSign className={cn('h-6 w-6 text-gray', isActive && 'text-white')} />
    ),
  },
  {
    itemName: 'Profile',
    iconRender: (isActive: boolean) => (
      <div className='relative'>
        <span className='absolute -right-1/3 -top-1/3 flex h-4 w-4 items-center justify-center rounded-full bg-orange text-[12px] text-white'>
          {`3`}
        </span>
        <Settings className={cn('h-6 w-6 text-gray', isActive && 'text-white')} />
      </div>
    ),
  },
];
