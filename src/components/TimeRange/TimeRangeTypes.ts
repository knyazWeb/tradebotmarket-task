export interface ITimeRangeProps {
  rangesList: string[];
  activeRange: TRange;
  onRangeChangeHandler: (range: TRange) => void;
  className?: string;
}
export type TRange = '24h' | '7d' | '30d' | 'all_time';
