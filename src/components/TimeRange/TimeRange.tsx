import { cn } from '@/utils';
import { ITimeRangeProps } from './TimeRangeTypes';

const TimeRange = ({
  activeRange,
  rangesList,
  onRangeChangeHandler,
  className,
}: ITimeRangeProps) => {
  return (
    <section className={cn('flex items-center justify-between gap-1.5 w-full', className)}>
      <span className='text-xs text-nowrap'>Time Range:</span>

      {/* Range Elements */}
      {rangesList.map((range) => {
        const isActiveRange = activeRange === range;
        return (
          <button
            onClick={() => onRangeChangeHandler(range)}
            className={cn(
              'flex w-full min-w-[50px] items-center justify-center rounded-full border border-gray p-1 text-gray transition-all duration-200 ease-in-out text-xs',
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
