import {
  BotSection,
  botSectionMockData,
  botsMockData,
  mockRanges,
  TimeRange,
  TradingChart,
  type TRange,
} from '@/components';
import { getFromLocalStorage, setToLocalStorage } from '@/utils';
import { useEffect, useState } from 'react';

const ContentBuilder = () => {
  // States
  const [activeRange, setActiveRange] = useState<TRange>('24h');
  const [activeBot, setActiveBot] = useState<string | null>(null);

  // Functions
  const onRangeChangeHandler = (range: TRange) => {
    setToLocalStorage<TRange>('range', range);
    setActiveRange(range);
  };

  // Effects
  useEffect(() => {
    const range = getFromLocalStorage<TRange>('range', '24h');
    setActiveRange(range);
  }, []);

  return (
    <>
      {/* Trading Chart */}
      <TradingChart
        activeBot={activeBot}
        className='mb-3'
      />
      {/* End Trading Chart */}

      {/* Bot section */}
      <BotSection className='wrapper mb-5'>
        {botSectionMockData.map((bot, index) => {
          const botInformation = botsMockData.find((item) => item.name == bot.name);
          const power =
            index === 1 || !botInformation
              ? null
              : +botInformation[activeRange].toFixed(1);
          const isActive = activeBot === bot.name;

          const onBotClick = (botName: string | undefined) => {
            if (!botName) return;
            setActiveBot(botName);
          };

          return (
            <BotSection.Item
              key={bot.name || index}
              onClick={() => onBotClick(bot.name)}
              botImageRender={bot.botImageRender}
              alias={bot.alias}
              isEmpty={!bot.name}
              power={power}
              isActive={isActive}
            />
          );
        })}
      </BotSection>
      {/* End Bot section */}

      {/* Time Range */}
      <TimeRange
        className='wrapper'
        activeRange={activeRange}
        onRangeChangeHandler={onRangeChangeHandler}
        rangesList={mockRanges}
      />
      {/* End Time Range */}
    </>
  );
};

export { ContentBuilder };
