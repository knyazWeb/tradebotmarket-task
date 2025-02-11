import { Header, Navigation, navigationMockData } from '@/components';
import { AlignJustify, RefreshCw } from 'lucide-react';

const DashboardPage = () => {
  return (
    <main className='relative'>
      {/* Header */}
      <Header>
        <Header.Item>
          <AlignJustify className='h-7 w-7 cursor-pointer text-gray' />
        </Header.Item>
        <Header.Item>Dashboard</Header.Item>
        <Header.Item>
          <RefreshCw className='h-7 w-7 cursor-pointer text-gray' />
        </Header.Item>
      </Header>
      {/* End Header */}

      {/* Navigation */}
      <Navigation className='fixed bottom-0 left-0'>
        {navigationMockData.map((item) => (
          <Navigation.Item
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
