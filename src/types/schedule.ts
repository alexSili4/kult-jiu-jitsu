export interface IProgramDetails {
  time: string;
  program: string;
  coach: string;
}

export interface IScheduleItem {
  days: string;
  items: IProgramDetails[][];
}
