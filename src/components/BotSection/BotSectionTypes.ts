import { HTMLAttributes, ReactNode } from 'react';
export interface IBotSectionProps {
  children: ReactNode;
  className?: string;
}

export interface IItemProps extends HTMLAttributes<HTMLDivElement> {
  power: number | null;
  alias: string;
  isEmpty?: boolean;
  botImageRender: () => React.ReactNode;
  isActive?: boolean;
}
