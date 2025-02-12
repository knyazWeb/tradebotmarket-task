import {
  Header,
  mockRanges,
  Navigation,
  navigationMockData,
  TimeRange,
  TradingChart,
  TradingInfo,
} from '@/components';
import { AlignJustify, RefreshCw } from 'lucide-react';
import { useState } from 'react';

const DashboardPage = () => {
  const [active, setActive] = useState<string>(mockRanges[0]);
  return (
    <main className='relative'>
      {/* Header */}
      <Header className='wrapper'>
        <Header.Item>
          <AlignJustify className='h-7 w-7 cursor-pointer text-gray' />
        </Header.Item>
        <Header.Item>Dashboard</Header.Item>
        <Header.Item>
          <RefreshCw className='h-7 w-7 cursor-pointer text-gray' />
        </Header.Item>
      </Header>
      {/* End Header */}

      {/* Trading Info */}
      <TradingInfo
        className='wrapper'
        balance={10850}
        onHold={24000}
        capital={1.00865}
        currency='BTC'
      />
      {/* End Trading Info */}

      {/* Trading Chart */}
      <TradingChart />
      {/* End Trading Chart */}

      {/* TODO: ВЫНЕСТИ ЛОГИКУ В КОМПОНЕНТ ОБËРТКУ */}
      {/* Time Range */}
      <TimeRange
        className='wrapper'
        activeRange={active}
        onRangeChangeHandler={(range) => setActive(range)}
        rangesList={mockRanges}
      />
      {/* End Time Range */}

      {/* Navigation */}
      <Navigation className='fixed bottom-0 left-0 h-[60px]'>
        {navigationMockData.map((item) => (
          <Navigation.Item
            key={item.itemName}
            itemName={item.itemName}
            iconRender={item.iconRender}
            isActive={item.isActive}
          />
        ))}
      </Navigation>
      {/* End Navigation */}
    </main>
  );
};

export { DashboardPage };
