import { cn } from '@/utils';
import { ITimeRangeProps, TRange } from './TimeRangeTypes';

const RangeMap: Record<string, TRange> = {
  '24h': '24h',
  '7 days': '7d',
  '30 days': '30d',
  'All time': 'all_time',
};

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
      {rangesList.map((range, i) => {
        const formattedRange = RangeMap[range];
        const isActiveRange = activeRange === RangeMap[range];
        return (
          <button
            key={i}
            onClick={() => onRangeChangeHandler(formattedRange)}
            disabled={isActiveRange}
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
