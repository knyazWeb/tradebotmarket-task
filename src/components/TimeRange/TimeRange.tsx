import { cn } from '@/utils';
import { ITimeRangeProps } from './TimeRangeTypes';

const TimeRange = ({
  activeRange,
  rangesList,
  onRangeChangeHandler,
  className,
}: ITimeRangeProps) => {
  return (
    <section
      className={cn('flex w-full items-center justify-between gap-1.5', className)}
    >
      <span className='text-nowrap text-xs'>{`Time Range:`}</span>

      {/* Range Elements */}
      {rangesList.map((range) => {
        const isActiveRange = activeRange === range;
        return (
          <button
            key={range}
            onClick={() => onRangeChangeHandler(range)}
            className={cn(
              'flex w-fit min-w-[50px] items-center justify-center rounded-full border border-gray p-1 text-xs text-gray transition-all duration-200 ease-in-out xs:w-full',
              isActiveRange && 'border-white text-white',
            )}
          >
            {range}
          </button>
        );
      })}
      {/* End Range Elements */}
    </section>
  );
};

export { TimeRange };
