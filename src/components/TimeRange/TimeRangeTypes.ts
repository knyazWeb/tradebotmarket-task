export interface ITimeRangeProps {
  rangesList: string[];
  activeRange: string;
  onRangeChangeHandler: (range: string) => void;
  className?: string;
}