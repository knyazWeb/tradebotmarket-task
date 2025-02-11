export interface INavigationProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface IItemProps extends React.HTMLAttributes<HTMLDivElement> {
  itemName: string;
  iconRender: (isActive: boolean) => React.ReactNode;
  isActive?: boolean;
}
