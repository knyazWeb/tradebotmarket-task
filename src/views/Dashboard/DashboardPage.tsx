import {
  ContentBuilder,
  Header,
  Navigation,
  navigationMockData,
  TradingInfo,
} from '@/components';
import { AlignJustify, RefreshCw } from 'lucide-react';

const DashboardPage = () => {
  return (
    <main className='relative mx-auto h-screen w-screen max-w-[400px] pb-[60px]'>
      {/* Header */}
      <Header className='wrapper'>
        <Header.Item>
          <AlignJustify className='h-6 w-6 cursor-pointer text-gray' />
        </Header.Item>
        <Header.Item>Dashboard</Header.Item>
        <Header.Item>
          <RefreshCw className='h-6 w-6 cursor-pointer text-gray' />
        </Header.Item>
      </Header>
      {/* End Header */}

      {/* Trading Info */}
      <TradingInfo
        className='wrapper mb-5'
        balance={10850}
        onHold={24000}
        capital={1.00865}
        currency='BTC'
      />
      {/* End Trading Info */}

      {/* Main Content */}
      <ContentBuilder />
      {/* End Main Content */}

      {/* Navigation */}
      <Navigation className='fixed bottom-0 left-1/2 -translate-x-1/2 h-[60px] w-full max-w-[400px]'>
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
