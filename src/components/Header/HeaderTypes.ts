import { ReactNode } from 'react';

export interface IHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface ITitleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
