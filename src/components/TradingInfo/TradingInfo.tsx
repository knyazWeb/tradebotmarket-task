import Coin from '@/assets/coins/h-coin.svg';
import { cn, priceFormatter } from '@/utils';
import { useMemo } from 'react';
import { ITradingInfoProps } from './TradingInfoTypes';

const TradingInfo = ({
  balance,
  capital,
  currency,
  onHold,
  className,
}: ITradingInfoProps) => {
  const formattedCapital = capital.toFixed(5);
  const formattedBalance = useMemo(() => priceFormatter(balance), [balance]);
  const formattedOnHold = useMemo(() => priceFormatter(onHold), [onHold]);

  return (
    <section className={cn('flex items-end justify-between text-sm flex-wrap gap-2', className)}>
      {/* Trading Capital */}
      <div className='flex flex-col gap-1'>
        <span className='font-bold uppercase'>{`TRADING CAPITAL`}</span>
        <span className='text-3xl uppercase text-white'>{`${formattedCapital} ${currency}`}</span>
      </div>
      {/* End Trading Capital */}

      {/* Balance & Hold */}
      <div className='flex flex-col gap-1'>
        <div className='flex items-center justify-between gap-1'>
          <span className='font-bold uppercase'>{`BALANCE: `}</span>
          <div className='flex items-center justify-end gap-1.5'>
            <span className='font-medium text-white'>{`${formattedBalance}`}</span>
            <span className='pb-[1px]'>
              <Coin />
            </span>
          </div>
        </div>
        <div className='flex items-center justify-between gap-3'>
          <span className='font-bold uppercase'>{`ON HOLD: `}</span>
          <div className='flex items-center justify-end gap-1.5'>
            <span className='font-medium text-white'>{`${formattedOnHold}`}</span>
            <span className='pb-[1px]'>
              <Coin />
            </span>
          </div>
        </div>
      </div>
      {/* End Balance & Hold */}
    </section>
  );
};

export { TradingInfo };
