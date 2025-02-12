import { useIsTouchDevice } from '@/hooks';
import { cn } from '@/utils';
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import gradient from 'chartjs-plugin-gradient';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { data, options } from './Chart.data';
import { ITradingChartProps } from './TradingChartTypes';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  gradient,
);

const TradingChart = ({ className }: ITradingChartProps) => {
  // States
  const chartRef = useRef(null);
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const [isChartActive, setIsChartActive] = useState<boolean>(false);
  const isTouchDevice = useIsTouchDevice();
  // End States

  // Functions
  const onChartInteraction = useCallback(
    (_: unknown, chartElements: { index: number }[]) => {
      console.log('here');

      if (!chartRef.current || chartElements.length === 0) {
        setSelectedValue(null);
        setIsChartActive(false);
        return;
      }
      const index = chartElements[0].index;
      const hoveredValue = +data.datasets[0].data[index].toFixed(1);

      setIsChartActive(true);
      setSelectedValue(hoveredValue);
    },
    [],
  );

  const handleTouchOutside = useCallback((event: TouchEvent | MouseEvent) => {
    if (!chartRef.current) return;

    if (!(chartRef.current as ChartJS).canvas.contains(event.target as Node)) {
      setSelectedValue(null);
      setIsChartActive(false);
    }
  }, []);
  // End Functions

  // Effects
  useEffect(() => {
    if (isChartActive) {
      document.addEventListener('touchstart', handleTouchOutside, { passive: true });
      document.addEventListener('click', handleTouchOutside, { passive: true });
    } else {
      document.removeEventListener('touchstart', handleTouchOutside);
      document.removeEventListener('click', handleTouchOutside);
    }

    return () => {
      document.removeEventListener('touchstart', handleTouchOutside);
      document.removeEventListener('click', handleTouchOutside);
    };
  }, [isChartActive, handleTouchOutside]);
  // End Effects

  return (
    <section className={cn('w-full overflow-hidden', className)}>
      <div className='relative mx-auto w-[calc(100vw+100px)] translate-x-[-50px]'>
        <Line
          ref={chartRef}
          options={{
            ...options,
            onHover: !isTouchDevice ? onChartInteraction : null,
            onClick: isTouchDevice ? onChartInteraction : null,
          }}
          data={data}
          onMouseLeave={() => setSelectedValue(null)}
        />
        {/* Chart selected or hovered value */}
        {selectedValue && (
          <div className='text-green pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-2xl font-sans font-light'>{`${selectedValue > 0 ? '+' : ''}${selectedValue}%`}</div>
        )}
        {/* End Chart selected or hovered value */}
      </div>
    </section>
  );
};

export { TradingChart };
