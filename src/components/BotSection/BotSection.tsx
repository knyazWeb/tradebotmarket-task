import { cn } from '@/utils';
import { IBotSectionProps, IItemProps } from './BotSectionTypes';

const BotSection = ({ children, className }: IBotSectionProps) => {
  return (
    <section
      className={cn(
        'grid grid-cols-[repeat(3,minmax(50px,120px))] grid-rows-[repeat(2,minmax(0,1fr))] items-center justify-center gap-1',
        className,
      )}
    >
      {children}
    </section>
  );
};

const Item = ({
  botImageRender,
  alias,
  power,
  isEmpty,
  className,
  isActive = false,
  ...props
}: IItemProps) => {
  const formattedPower = power ? +power.toFixed(1) : null;
  return (
    <div
      {...props}
      className={cn(
        'flex aspect-square h-full cursor-pointer flex-col items-center justify-center gap-2 rounded-md bg-lightOcean px-5 py-3 transition-all duration-300 ease-in-out',
        isEmpty && '[&>div]:opacity-50',
        isActive && 'shadow-inner-custom',
        className,
      )}
    >
      {botImageRender()}
      <div className='flex flex-col items-center justify-center'>
        <span className='text-center text-xs font-medium uppercase text-white'>
          {alias}
        </span>
        {formattedPower && (
          <span
            className={cn(
              'text-center text-[10px] font-medium uppercase',
              formattedPower < 0 ? 'text-pink' : 'text-green',
            )}
          >
            {`${formattedPower > 0 ? '+' : ''}${power}%`}
          </span>
        )}
      </div>
    </div>
  );
};

BotSection.Item = Item;

export { BotSection };
