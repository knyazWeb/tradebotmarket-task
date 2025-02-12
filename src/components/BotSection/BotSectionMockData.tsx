import BlackBot from '@/assets/bots/black-bot.svg';
import BlueBot from '@/assets/bots/blue-bot.svg';
import GreenBot from '@/assets/bots/green-bot.svg';
import line1 from '@/assets/bots/line-1.png';
import line2 from '@/assets/bots/line-2.png';
import line3 from '@/assets/bots/line-3.png';
import line4 from '@/assets/bots/line-4.png';
import OrangeBot from '@/assets/bots/orange-bot.svg';
import RedBot from '@/assets/bots/red-bot.svg';
import YellowBot from '@/assets/bots/yellow-bot.svg';

export const botSectionMockData = [
  {
    name: 'orange_bot',
    alias: 'ATTACK',
    botImageRender: () => (
      <div className='h-full max-h-[50px] w-full max-w-[50px]'>
        <OrangeBot />
      </div>
    ),
  },
  {
    alias: 'PLACE BOT HERE',
    botImageRender: () => (
      <div className='h-full max-h-[50px] w-full max-w-[50px]'>
        <BlackBot />
      </div>
    ),
  },
  {
    name: 'blue_bot',
    alias: 'BALANCE',
    botImageRender: () => (
      <div className='h-full max-h-[50px] w-full max-w-[50px]'>
        <BlueBot />
      </div>
    ),
  },
  {
    name: 'green_bot',
    alias: 'DEFENSE',
    botImageRender: () => (
      <div className='h-full max-h-[50px] w-full max-w-[50px]'>
        <GreenBot />
      </div>
    ),
  },
  {
    name: 'yellow_bot',
    alias: 'MEGABOT',
    botImageRender: () => (
      <div className='relative h-full max-h-[50px] w-full max-w-[50px]'>
        <YellowBot />
        <img
          className='absolute -left-[calc(110%)] -top-2/4 rotate-45'
          src={line1}
          alt='line1'
        />
        <img
          className='absolute -bottom-1/3 -right-[calc(110%)] -rotate-45'
          src={line2}
          alt='line2'
        />
        <img
          className='absolute -right-full bottom-full'
          src={line3}
          alt='line3'
        />
        <img
          className='absolute -left-[calc(120%)] bottom-0'
          src={line4}
          alt='line4'
        />
      </div>
    ),
  },
  {
    name: 'red_bot',
    alias: 'ATTACK',
    botImageRender: () => (
      <div className='h-full max-h-[50px] w-full max-w-[50px]'>
        <RedBot />
      </div>
    ),
  },
];

export const botsMockData = [
  {
    name: 'yellow_bot',
    '24h': 3.15,
    '7d': 0.065,
    '30d': 4.1,
    all_time: 126.85,
  },
  {
    name: 'green_bot',
    '24h': 3.33,
    '7d': -17.6,
    '30d': -2.5,
    all_time: 4.99,
  },
  {
    name: 'red_bot',
    '24h': -10.8,
    '7d': 5.5,
    '30d': 11.4,
    all_time: 71.0,
  },
  {
    name: 'blue_bot',
    '24h': -6.5,
    '7d': -4.3,
    '30d': -0.17,
    all_time: 10.1,
  },
  {
    name: 'orange_bot',
    cost: 550,
    '24h': 210.1,
    '7d': 81.3,
    '30d': 90.7,
    all_time: 98.67,
  },
];
